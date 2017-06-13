import { buildPostParams } from './util';
import { authoredTweet, truncatedReplyingTweet } from '../mocks';

test('Adds status to params', () => {
  const str = 'What a jerk.';
  const actual = buildPostParams(authoredTweet, str).status;
  expect(actual).toBe(str);
});

test('Adds in_reply_to_status_id_str to params if is reply', () => {
  const str = 'What a jerk.';
  const actual = buildPostParams(truncatedReplyingTweet, str).in_reply_to_status_id_str;
  const expected = '874285480606674945';

  expect(actual).toBe(expected);
});
