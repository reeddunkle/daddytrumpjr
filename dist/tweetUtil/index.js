'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildApprovalText = undefined;
exports.addApproval = addApproval;
exports.truncateText = truncateText;
exports.isAuthor = isAuthor;
exports.getTweetText = getTweetText;

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _truncate = require('lodash/fp/truncate');

var _truncate2 = _interopRequireDefault(_truncate);

var _unescape2 = require('lodash/fp/unescape');

var _unescape3 = _interopRequireDefault(_unescape2);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addApproval(str) {
  return str + ' Right, dad?';
}

function truncateText(str) {
  var options = {
    length: 128, // 140 - ' Right, dad?'.length (12)
    separator: ' ',
    omission: '...?'
  };
  return (0, _truncate2.default)(options, str);
}

function isAuthor(followId, tweet) {
  return (0, _toString2.default)(followId) === tweet.user.id_str;
}

function getTweetText(tweet) {
  return tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text;
}

var buildApprovalText = exports.buildApprovalText = (0, _flow2.default)(_unescape3.default, truncateText, addApproval);
//# sourceMappingURL=index.js.map