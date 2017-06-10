import toString from 'lodash/toString';
import Twitter from 'twitter';
import config from '../config';

const users = {
  deer: 62298196,
  dtJR: 39344374,
};

function isAuthor(followId, tweet) {
  return toString(followId) === tweet.user.id_str;
}

function addApproval(text) {
  return `${text} Right, dad?`;
}

function run() {
  const client = new Twitter(config);
  const path = 'statuses/filter';
  const params = {
    follow: users.deer,
  };

  function postTweet(status) {
    client.post('statuses/update', { status }, (error, tweet, response) => {  // eslint-disable-line no-unused-vars
      if (!error) console.log(tweet);
    });
  }

  client.stream(path, params, (stream) => {
    stream
      .on('data', (tweet) => {
        if (isAuthor(params.follow, tweet)) {
          console.log(tweet);
          console.log('=====================================');
          const seekApprovalText = addApproval(tweet.text);
          postTweet(seekApprovalText);
        }
      })
      .on('error', (error) => {
        console.error(error);
      });
  });
}

run();
