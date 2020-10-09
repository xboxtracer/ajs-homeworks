import { orderByProps, getSpecial } from '../object';

test('check for objByProps', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(obj, ["name", "level"]);
    const expected = [
        {key: 'name', value: 'мечник'}, 
        {key: 'level', value: 2}, 
        {key: 'attack', value: 80}, 
        {key: 'defence', value: 40}, 
        {key: 'health', value: 10}
    ]
    expect(result).toEqual(expected);
});

test('check for getSpecial', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            }, 
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
                // <- обратите внимание, описание "засекречено"
            }
        ]	
    }
    const result = getSpecial(character.special)
    const expected = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ]
    expect(result).toEqual(expected);
});