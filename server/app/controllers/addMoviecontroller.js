const pg = require('pg');
const pool = new pg.Pool({
user: 'moviesAdmin',
host: '127.0.0.1',
database: 'Movies',
password: 'admin',
port: '5432'});

addMovie = async (req, res) => {

    pool.query("INSERT INTO movieList(id, Title, Year) VALUES(" + req.params + ")", (err, resp) => {
        console.log(err, resp);
        res.send(resp.rows)
    });
}

module.exports = addMovie;