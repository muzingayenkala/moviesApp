const pg = require('pg');
const pool = new pg.Pool({
user: 'moviesAdmin',
host: '127.0.0.1',
database: 'Movies',
password: 'admin',
port: '5432'});


getMovies = async (req, res) => {

    // pool.query("CREATE TABLE movieList(id SERIAL PRIMARY KEY, Title VARCHAR(40) NOT NULL, Year VARCHAR(40) NOT NULL)", (err, res) => {
    //     console.log(err, res);
    //     pool.end();
    // });

    pool.query("SELECT * FROM movieList;", (err, resp) => {
        console.log(err, resp);
        res.send(resp.rows)
    });
}

module.exports = getMovies;
