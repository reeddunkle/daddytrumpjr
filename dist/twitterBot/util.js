'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPostParams = undefined;
exports.onTweetPosted = onTweetPosted;

var _curry = require('lodash/fp/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onTweetPosted(err) {
  if (err) {
    console.error('tweet failed.');
    console.error(err);
  }
} /* eslint-disable import/prefer-default-export */
var buildPostParams = exports.buildPostParams = (0, _curry2.default)(function (tweet, status) {
  var params = { status: status };
  if (tweet.quoted_status) params.in_reply_to_status_id_str = tweet.quoted_status_id_str;
  return params;
});
//# sourceMappingURL=util.js.map