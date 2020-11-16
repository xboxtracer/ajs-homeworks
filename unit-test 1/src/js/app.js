// TODO: write your code here

export function hpBar(obj) {
  let result;
  if (obj.health > 50) {
    result = 'healthy';
  } else if (obj.health <= 50 && obj.health >= 15) {
    result = 'wounded';
  } else if (obj.health < 14) {
    result = 'critical';
  } else if (!obj.health) {
    result = 'not necesary';
  }

  return result;
}