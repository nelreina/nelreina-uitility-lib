import bcrypt from 'bcrypt-nodejs';
export const getSalt = salt_work_factor =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(salt_work_factor, (err, salt) => {
      if (err) reject(err);
      resolve(salt);
    });
  });

export const encrypt = value =>
  new Promise(async (resolve, reject) => {
    const salt = await getSalt(4);
    bcrypt.hash(value, salt, null, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });

export const compare = (value, hash) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(value, hash, (err, isValid) => {
      if (err) reject(err);
      resolve(isValid);
    });
  });
