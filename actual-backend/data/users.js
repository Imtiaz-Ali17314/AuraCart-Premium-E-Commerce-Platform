const fs = require('node:fs/promises');
const path = require('node:path');

const usersFilePath = path.join(__dirname, '..', 'users.json');

async function getStoredUsers() {
  try {
    const rawFileContent = await fs.readFile(usersFilePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.users ?? [];
  } catch (err) {
    return [];
  }
}

function storeUsers(users) {
  return fs.writeFile(usersFilePath, JSON.stringify({ users: users || [] }));
}

exports.getStoredUsers = getStoredUsers;
exports.storeUsers = storeUsers;
