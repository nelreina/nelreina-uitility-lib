export const sum = (x, y) => x + y;

export const aSyncFunc = (ok = true) =>
  new Promise((resolve, reject) => {
    return ok ? resolve('Its OK') : reject('Its NOT OK');
  });
