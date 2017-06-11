import express from 'express';
import flow from 'lodash/fp/flow';
import noop from 'lodash/noop';
import Twitter from 'twitter';
import { addApproval, cropText, decodeHTML, isAuthor } from '../tweetUtil';
import { onTweetPosted } from './util';

// HEROKU SETUP
const app = express();
app.get('/', (req, res) => { res.send('The robot is happily running.'); });
app.listen(process.env.PORT || 5000);

const config = {
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
};

const USERS = {
  dtJR: 39344374,
  test: 62298196,
};

const client = new Twitter(config);
const path = 'statuses/filter';
const params = {
  follow: USERS.dtJR,
};

function postTweet(status) {
  client.post('statuses/update', { status }, onTweetPosted);
}

function seekApproval(tweet) {
  return flow(
    decodeHTML,
    cropText,
    addApproval,
    postTweet,
  )(tweet.text);
}

export default function run() {
  client.stream(path, params, (stream) => {
    stream
      .on('data', (tweet) => {
        if (isAuthor(params.follow, tweet)) seekApproval(tweet);
      });
  });
}
