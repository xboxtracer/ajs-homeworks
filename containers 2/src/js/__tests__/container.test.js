import { ErrorRepository } from '../container';

test('check ErrorRepository for correct error', () => { 
  const errMap = new ErrorRepository();
  const newError = {
      value: 'someError',
      code: 992
  }
  errMap.setErr(newError)
  const result = errMap.translate(992)
  const expected = 'someError'

  expect(result).toBe(expected);
});

test('check ErrorRepository for unknown error', () => { 
  const errMap = new ErrorRepository();
  const newError = {
      value: 'someError',
      code: 992
  }
  errMap.setErr(newError)
  const result = errMap.translate(995)
  const expected = 'Unknown error'

  expect(result).toBe(expected);
});