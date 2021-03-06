// TODO: write your code here
import sum from './basic';
import { Bowerman, Swordsman, Magician, Undead, Zombie, Daemon } from './characters';

console.log(sum([1, 2]));

export function hpBar(obj) {
  let result;
  if (obj.health > 50) {
    result = 'healthy';
  } else if (obj.health < 50 && obj.health > 15) {
    result = 'wounded';
  } else if (obj.health < 15) {
    result = 'critical';
  } else if (!obj.health) {
    result = 'not necesary';
  }
  return result;
}

export function srotingByHp(arr) {
    if (arr[0] === undefined) {
        return 'not necesary'
    }
    arr.sort(function(a, b){
        return b.health - a.health
    })
    return arr
}