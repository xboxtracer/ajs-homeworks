import { loadUser } from '../user';
import { httpGet } from '../http';
import { hpBar } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('check for hp healthy', () => {
  const hp = hpBar({ name: 'Маг', health: 90 });
  const expected = 'healthy';

  expect(hp).toBe(expected);
});
test('check for hp wounded', () => {
  const hp = hpBar({ name: 'Маг', health: 40 });
  const expected = 'wounded';

  expect(hp).toBe(expected);
});
test('check for hp critical', () => {
  const hp = hpBar({ name: 'Маг', health: 10 });
  const expected = 'critical';

  expect(hp).toBe(expected);
});
test('check for hp critical', () => {
  const hp = hpBar(5);
  const expected = 'not necesary';

  expect(hp).toBe(expected);
});
