import { Validator, changePhoneNumber } from '../regExp';

test('check Validator for correct', () => {
  const valid = new Validator('Nik111ta');
  const result = valid.validateUsername();
  const expected = true;

  expect(result).toBe(expected);
});