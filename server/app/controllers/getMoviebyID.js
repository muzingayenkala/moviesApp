const pg = require('pg');
const pool = new pg.Pool({
user: 'moviesAdmin',
host: '127.0.0.1',
database: 'Movies',
password: 'admin',
port: '5432'});


getMoviebyID = async (req, res) => {

    var movie = req.params.id;

    pool.query("SELECT * FROM movieList WHERE id=" + movie.toString(), (err, resp) => {
        console.log(err, resp);
        res.send(resp.rows)
    });
}

module.exports = getMoviebyID;