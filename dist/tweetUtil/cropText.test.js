"use strict";

var _index = require("./index");

var longText = "Great call by these companies. #enoughisenough Of course CNN's parent company Time Warner remains a sponsor, but that should shock no one!";
var croppedText = "Great call by these companies. #enoughisenough Of course CNN's parent company Time Warner remains a sponsor, but that should...?";

test('truncatesText to 128 characters', function () {
  expect((0, _index.truncateText)(longText).length).toBe(128);
});

test('truncatesText correctly', function () {
  expect((0, _index.truncateText)(longText)).toBe(croppedText);
});
//# sourceMappingURL=cropText.test.js.map