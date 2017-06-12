import flow from 'lodash/fp/flow';
import Twitter from 'twitter';
import { addApproval, cropText, decodeHTML, isAuthor } from '../tweetUtil';
import { onTweetPosted } from './util';

const config = {
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
};
const client = new Twitter(config);

const USERS = {
  dtJR: 39344374,
  test: 62298196,
};
const PATH = 'statuses/filter';
const PARAMS = {
  follow: USERS.dtJR,
};

function postTweet(status) {
  client.post('statuses/update', { status }, onTweetPosted);
}

const seekApproval = flow(
  decodeHTML,
  cropText,
  addApproval,
  postTweet,
);

function onTweetReceived(tweet) {
  console.log(tweet);
  const meetsRequirements = (
    !tweet.retweeted &&
    isAuthor(PARAMS.follow, tweet)
  );

  if (meetsRequirements) {
    seekApproval(tweet.text);
  }
}

export default function run() {
  client.stream(PATH, PARAMS, (stream) => {
    stream.on('data', onTweetReceived);
  });
}
