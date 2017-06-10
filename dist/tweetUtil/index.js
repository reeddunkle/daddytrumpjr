'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addApproval = addApproval;
exports.cropText = cropText;
exports.isAuthor = isAuthor;

var _truncate = require('lodash/fp/truncate');

var _truncate2 = _interopRequireDefault(_truncate);

var _toString = require('lodash/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addApproval(text) {
  return text + ' Right, dad?';
}

function cropText(text) {
  var options = {
    length: 128, // 140 - ' Right, dad?'.length (12)
    separator: ' '
  };
  return (0, _truncate2.default)(options, text);
}

function isAuthor(followId, tweet) {
  return (0, _toString2.default)(followId) === tweet.user.id_str;
}
//# sourceMappingURL=index.js.map