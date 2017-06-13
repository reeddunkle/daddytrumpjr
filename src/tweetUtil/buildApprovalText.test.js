import { buildApprovalText } from './index';
// Note: this test should probably be removed,
// as it is just a piping of the pure functions tested elsewhere

const encodedTweet = 'I wonder how much of this "art" is funded by taxpayers? Serious question, when does "art" become political speech &amp;… https://t.co/zSHHD8Z6IJ';

test('returns full_text when truncated', () => {
  const expected = 'I wonder how much of this "art" is funded by taxpayers? Serious question, when does "art" become political speech &…...? Right, dad?';
  expect(buildApprovalText(encodedTweet)).toBe(expected);
});
