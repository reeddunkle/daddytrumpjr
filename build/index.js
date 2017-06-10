'use strict';

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
};

var users = {
  dtJR: 39344374
};

function isAuthor(followId, tweet) {
  return (0, _toString2.default)(followId) === tweet.user.id_str;
}

function addApproval(text) {
  return text + ' Right, dad?';
}

function run() {
  var client = new _twitter2.default(config);
  var path = 'statuses/filter';
  var params = {
    follow: users.dtJR
  };

  function postTweet(status) {
    client.post('statuses/update', { status: status }, _noop2.default);
  }

  client.stream(path, params, function (stream) {
    stream.on('data', function (tweet) {
      if (isAuthor(params.follow, tweet)) {
        var seekApprovalText = addApproval(tweet.text);
        postTweet(seekApprovalText);
      }
    });
  });
}

run();
//# sourceMappingURL=index.js.map