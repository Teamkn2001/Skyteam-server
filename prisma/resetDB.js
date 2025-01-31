require('dotenv').config()
const prisma = require('../src/config/prisma')


async function run() {
    try {
        await prisma.$executeRawUnsafe('DROP DATABASE skyteamdb1');
        await prisma.$executeRawUnsafe('CREATE DATABASE skyteamdb1');
    } catch (err) {
        console.log('error in reset DB', err);
    }
}
console.log('Reset DB..');
run();