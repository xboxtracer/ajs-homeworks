import { hpBar } from '../app';

test('check for hp healthy', () => {
  const hp = hpBar({ name: 'Маг', health: 90 });
  const expected = 'healthy';

  expect(hp).toBe(expected);
});
test('check for hp critical', () => {
  const hp = hpBar({ name: 'Маг', health: 50 });
  const expected = 'wounded';

  expect(hp).toBe(expected);
});
test('check for hp wounded', () => {
  const hp = hpBar({ name: 'Маг', health: 40 });
  const expected = 'wounded';

  expect(hp).toBe(expected);
});
test('check for hp critical', () => {
  const hp = hpBar({ name: 'Маг', health: 15 });
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