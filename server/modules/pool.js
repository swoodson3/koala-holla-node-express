const pg = require('pg');

// Setup pg to allow for database connections 
const pool = new pg.Pool({
    // The name of our database
    database: 'koala',
    // Our database is on our computer
    host: 'Localhost',
    // What port is our database
    port: 5432,
});

module.exports = pool;