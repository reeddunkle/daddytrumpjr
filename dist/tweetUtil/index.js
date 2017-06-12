'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeHTML = undefined;
exports.addApproval = addApproval;
exports.cropText = cropText;
exports.isAuthor = isAuthor;

var _truncate = require('lodash/fp/truncate');

var _truncate2 = _interopRequireDefault(_truncate);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _replace = require('lodash/fp/replace');

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addApproval(str) {
  return str + ' Right, dad?';
}

function cropText(str) {
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

var decodeHTML = exports.decodeHTML = (0, _flow2.default)((0, _replace2.default)('&amp;', '&'), (0, _replace2.default)('&gt;', '>'), (0, _replace2.default)('&lt;', '<'), (0, _replace2.default)('&quot;', '"'), (0, _replace2.default)('&#39;', "'"));
//# sourceMappingURL=index.js.map