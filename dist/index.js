'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _twitterBot = require('./twitterBot');

var _twitterBot2 = _interopRequireDefault(_twitterBot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get('/', function (req, res) {
  res.send('The robot is happily running.');
});
app.listen(process.env.PORT);

(0, _twitterBot2.default)();
//# sourceMappingURL=index.js.map