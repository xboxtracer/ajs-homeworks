import { loadUser } from '../user';
import { httpGet } from '../http';
import { hpBar, srotingByHp } from '../app';

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

test('check for players sort', () => {
  const hpArr = srotingByHp([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]);
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  expect(hpArr).toEqual(expected);
});

test('check for players undef', () => {
  const hpArrUndef = srotingByHp(5);
  const expected = 'not necesary';

  expect(hpArrUndef).toBe(expected);
});
