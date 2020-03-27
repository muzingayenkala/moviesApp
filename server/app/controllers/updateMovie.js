const pg = require('pg');
const pool = new pg.Pool({
user: 'moviesAdmin',
host: '127.0.0.1',
database: 'Movies',
password: 'admin',
port: '5432'});


updateMovie = async (req, res) => {

    var movie = req.params;

    pool.query("UPDATE movieList SET Title=" + movie.name + "," + "Year=" + movie.year + "WHERE id=" + movie.id, (err, res) => {
        console.log(err, res);
        success = {
            response: movie.toString() + "Succesfully updated!",
          }
        res.send(success)
    });
}

module.exports = updateMovie;