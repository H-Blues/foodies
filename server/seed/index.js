import userModel from '../api/user/userModel.js';
import users from './user.js';

import dotenv from 'dotenv';

dotenv.config();

async function loadUsers() {
  console.log('loading user Data...');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
}