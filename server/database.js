const spicedPg = require('spiced-pg');
let db;

if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const {
        DATABASE_USER,
        DATABASE_PASSWORD,
        DATABASE_NAME,
    } = require('../secrets.json');
    db = spicedPg(
        `postgres:${DATABASE_USER}:${DATABASE_PASSWORD}@localhost:5432/${DATABASE_NAME}`
    );
    console.log(`[db] Connecting to: ${DATABASE_NAME}`);
}

async function getProjects() {
    const query = await db.query(`select * from projects`);
    // console.log(query.rows);
    return query.rows;
}

module.exports = {
    getProjects,
};
