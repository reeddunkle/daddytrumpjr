import { getTweetText } from './index';
import { authoredTweet, truncatedReplyingTweet, truncatedNoExtendedEncodedTweet } from '../mocks';

test('returns full_text when available', () => {
  const expected = 'Great call by these companies. #enoughisenough Of course CNN\'s parent company Time Warner remains a sponsor, but that should shock no one! https://t.co/rs2Zy2MfOU';
  expect(getTweetText(truncatedReplyingTweet)).toBe(expected);
});

test('returns text when truncated but no full_text', () => {
  const expected = 'I wonder how much of this "art" is funded by taxpayers? Serious question, when does "art" become political speech &amp;… https://t.co/zSHHD8Z6IJ';
  expect(getTweetText(truncatedNoExtendedEncodedTweet)).toBe(expected);
});

test('returns regular text when not truncated', () => {
  const expected = 'I thought this was awesome. My friend Kevin from @tradgeeks sent it to me. It was apparently… https://t.co/gaHOYfUUeY';
  expect(getTweetText(authoredTweet)).toBe(expected);
});
