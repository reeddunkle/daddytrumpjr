import { truncateText } from './index';

const longText = "Great call by these companies. #enoughisenough Of course CNN's parent company Time Warner remains a sponsor, but that should shock no one!";
const croppedText = "Great call by these companies. #enoughisenough Of course CNN's parent company Time Warner remains a sponsor, but that should...?";

test('truncatesText to 128 characters', () => {
  expect(truncateText(longText).length).toBe(128);
});

test('truncatesText correctly', () => {
  expect(truncateText(longText)).toBe(croppedText);
});
