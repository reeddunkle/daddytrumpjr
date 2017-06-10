'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _tweetUtil = require('../tweetUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
};

var users = {
  dtJR: 39344374,
  deer: 62298196
};

var client = new _twitter2.default(config);
var path = 'statuses/filter';
var params = {
  follow: users.deer
};

function postTweet(status) {
  client.post('statuses/update', { status: status }, _noop2.default);
}

function seekApproval(tweet) {
  return (0, _flow2.default)(_tweetUtil.cropText, _tweetUtil.addApproval, postTweet)(tweet.text);
}

function run() {
  client.stream(path, params, function (stream) {
    stream.on('data', function (tweet) {
      if ((0, _tweetUtil.isAuthor)(params.follow, tweet)) seekApproval(tweet);
    });
  });
}
//# sourceMappingURL=index.js.map