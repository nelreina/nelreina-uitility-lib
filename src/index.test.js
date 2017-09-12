import S from 'string';
import { encrypt, getSalt, compare } from './index';
S.extendPrototype();
const hash = '$2a$12$ALvTg23Vlf.ZctFwoguJS./935JrXCELGwk/YxBPI8fgEEooHVIUC';

test('Salt value should return a string with 29 char', async () => {
  let data = await getSalt(12);
  expect(typeof data).toBe('string');
  expect(data).toHaveLength(29);
});

test('Encryption value should return a string', async () => {
  let data = await encrypt(false);
  expect(typeof data).toBe('string');
});

test('Hash code should be valid', async () => {
  let data = await compare('awesomepassword', hash);
  expect(data).toBeTruthy();
});
test('Hash code should be NOT valid', async () => {
  try {
    let data = await compare('awesomepassword', hash);
  } catch (error) {
    expect(error).toBeTruthy();
  }
});
