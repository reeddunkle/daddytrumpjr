import { addApproval } from './index';

test('Adds \' Right, dad?\' to string input', () => {
  const str = 'What a jerk.';
  expect(addApproval(str)).toBe('What a jerk. Right, dad?');
});
