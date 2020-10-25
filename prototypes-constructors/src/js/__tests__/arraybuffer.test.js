import { Magician, ArrayBufferConverter } from '../arraybuffer';

test('check Magician attack not stoned', () => {
  const mage = new Magician();

  mage.fight(2);
  
  const result = mage.attack;
  const expected = 90;

  expect(result).toBe(expected);
});

test('check Magician stoned attack', () => {
  const mage = new Magician();

  mage.stone(true);
  mage.fight(2);
  
  const result = mage.attack;
  const expected = 85;

  expect(result).toBe(expected);
});

test('check ArrayBufferConverter', () => {

  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  };

  const newArrBuffer = new ArrayBufferConverter;
  newArrBuffer.load(getBuffer());
  const result = newArrBuffer.toString();

  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(result).toBe(expected);
});

