import { Bowerman, Swordsman, Magician, Undead, Zombie, Daemon } from '../characters';


test('check for Magician attack', () => {
    const mage = new Magician({ name: 'Маг'});
    // const expected = 'healthy';
    expect(mage.attack).toBe(10);
});
test('check for Magician levelup attack', () => {
    const mage = new Magician({ name: 'Маг'});
    // const expected = 'healthy';
    mage.levelUp();
    expect(mage.attack).toBe(12);
});
test('check for Magician taking damage', () => {
    const mage = new Magician({ name: 'Маг'});
    // const expected = 'healthy';
    mage.damage(40);
    expect(mage.health).toBe(76);
});
test('check for Magician taking damage', () => {
    const mage = new Magician({ name: 'Маг'});
    // const expected = 'healthy';
    mage.damage(150);
    mage.damage(150);
    mage.damage(150);
    expect(mage.health).toBe(-80);
});