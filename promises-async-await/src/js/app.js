// TODO: write your code here
import sum from './basic';
import read from './reader';
import json from './parser';

export class GameSavingLoader {
    async load() {
        const data = await read();
        const value = await json(data);
        return value
    }
}

export class PromisedGameSavingLoader {
  load() {
    return new Promise(resolve => {
      resolve(read())
    })
      .then(result => json(result))
      
  }
}