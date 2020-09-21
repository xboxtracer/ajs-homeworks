import Character from './domain.js'

export default class Game {
    start() {
      console.log('game started');
    }
}

export class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

const newGame = new Game()
export default newGame

export {readGameSaving, writeGameSaving}