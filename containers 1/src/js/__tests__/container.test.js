import { Team } from '../container';

test('check setContainer size after .add() and .addAll() ', () => {
  const expected = 4
  const setContainer = new Team()
  setContainer.add(6)
  setContainer.addAll(6, 7, 8, 9)
  setContainer.addAll(8, 9)
  setContainer.addAll(6, 7, 8)
  const result = setContainer.member.size
  expect(result).toBe(expected);
});

test('check setContainerator for correct', () => {  
  const setContainer = new Team()
  setContainer.addAll(6, 7, 8, 9)

  const expected = [6, 7, 8, 9]
  const result = setContainer.toArray()

  expect(result).toEqual(expected);
});