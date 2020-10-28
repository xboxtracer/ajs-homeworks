import { GameSavingLoader } from '../app';

test('should work with promise and async/await', async () => {
    const data = new GameSavingLoader();
    const result = await data.load()
    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'
    expect(result).toEqual(expected);
});