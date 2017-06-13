import { isAuthor } from './index';
import { authoredTweet, noiseTweetOne, noiseTweetTwo } from '../mocks';

const dtJrId = 39344374;

test('True when authored', () => {
  expect(isAuthor(dtJrId, authoredTweet)).toBe(true);
});

test('False when not author (1)', () => {
  expect(isAuthor(dtJrId, noiseTweetOne)).toBe(false);
});

test('False when not author (2)', () => {
  expect(isAuthor(dtJrId, noiseTweetTwo)).toBe(false);
});
