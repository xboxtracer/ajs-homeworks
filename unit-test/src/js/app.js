// TODO: write your code here
import sum from './basic';

// console.log('worked');

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
