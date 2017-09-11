import { sum, aSyncFunc, fetchData } from './index';

test('should add 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Test async code!', async () => {
  let data = await aSyncFunc(true);
  expect(data).toBe('Its OK');
});

test('Test async error code!', async () => {
  try {
    let data = await aSyncFunc(false);
  } catch (error) {
    expect(error).toBe('Its NOT OK');
  }
});
