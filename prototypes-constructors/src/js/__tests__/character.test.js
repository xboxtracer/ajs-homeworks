import { Bowerman, Swordsman, Magician, Undead, Zombie, Daemon } from '../characters';


test('check for Magician attack', () => {
    const mage = new Magician({ name: 'Маг'});
    expect(mage.attack).toBe(10);
});
test('check for Magician defence', () => {
    const mage = new Magician({ name: 'Маг'});
    expect(mage.defence).toBe(40);
});
test('check for Magician type', () => {
    const mage = new Magician({ name: 'Маг'});
    expect(mage.type).toBe('Magician');
});
test('check for Magician levelup attack', () => {
    const mage = new Magician({ name: 'Маг'});
    mage.levelUp();
    expect(mage.attack).toBe(12);
});
test('check for Magician taking damage', () => {
    const mage = new Magician({ name: 'Маг'});
    mage.damage(40);
    expect(mage.health).toBe(76);
});
test('check for Magician taking damage', () => {
    const mage = new Magician({ name: 'Маг'});
    mage.damage(150);
    mage.damage(150);
    mage.damage(150);
    expect(mage.health).toBe(-80);
});