import { srotingByHp } from '../app';

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