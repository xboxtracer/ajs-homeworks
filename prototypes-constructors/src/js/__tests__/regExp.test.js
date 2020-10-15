import { Validator, changePhoneNumber } from '../regExp';

test('check Validator for correct', () => {
  const valid = new Validator('Nik111ta');
  const result = valid.validateUsername();
  const expected = true;

  expect(result).toBe(expected);
});
test('check Validator for first letter wrong', () => {
  const valid = new Validator('1nik');
  const result = valid.validateUsername();
  const expected = false;

  expect(result).toBe(expected);
});
test('check Validator for last letter wrong', () => {
  const valid = new Validator('Nik_');
  const result = valid.validateUsername();
  const expected = false;

  expect(result).toBe(expected);
});
test('check Validator for triple number', () => {
  const valid = new Validator('Nik1111ta');
  const result = valid.validateUsername();
  const expected = false;

  expect(result).toBe(expected);
});


test('check changePhoneNumber for correct work', () => {
  const result = changePhoneNumber('+7 (906) 654 40-40');('+7 (906) 654 40-40');
  const expected = '+79066544040';

  expect(result).toBe(expected);
});