'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _tweetUtil = require('../tweetUtil');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
};
var client = new _twitter2.default(config);

var USERS = {
  dtJr: 39344374,
  test: 62298196
};
var PATH = 'statuses/filter';
var PARAMS = {
  follow: USERS.test
};

function postTweet(params) {
  client.post('statuses/update', params, _util.onTweetPosted);
}

function seekApproval(tweet) {
  var meetsRequirements = !tweet.retweeted && (0, _tweetUtil.isAuthor)(PARAMS.follow, tweet);

  if (meetsRequirements) {
    (0, _flow2.default)(_tweetUtil.getTweetText, _tweetUtil.buildApprovalText, (0, _util.buildPostParams)(tweet), postTweet)(tweet);
  }
}

function run() {
  client.stream(PATH, PARAMS, function (stream) {
    stream.on('data', seekApproval);
  });
}
//# sourceMappingURL=index.js.map