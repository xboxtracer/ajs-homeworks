class Character {
    constructor(options) {
        this.name = options.name;
        this.health = 100;
        this.level = 1
    }
    levelUp() {
        if(this.health > 0) {
            this.level += 1;
            this.health = 100;
            this.attack += ((this.attack * 2) / 10);
            this.defence += ((this.defence * 2) / 10);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 2 || value.length > 10) {
            console.log('Name length must be more than 2 and less than 10 simbols');
            return
        }
        this._name = value
    }
    damage(points) {
        if(this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            console.log('he is already dead')
        }
    }
}

export class Bowerman extends Character {
    constructor(options) {
        super(options);
        this.type = 'Bowman';
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(options) {
        super(options);
        this.type = 'Swordsman';
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(options) {
        super(options);
        this.type = 'Magician';
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(options) {
        super(options);
        this.type = 'Undead';
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(options) {
        super(options);
        this.type = 'Zombie';
        this.attack = 40;
        this.defence = 10;
    }
}

export class Daemon extends Character {
    constructor(options) {
        super(options);
        this.type = 'Daemon';
        this.attack = 10;
        this.defence = 40;
    }
}