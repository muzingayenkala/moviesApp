const pg = require('pg');
const pool = new pg.Pool({
user: 'moviesAdmin',
host: '127.0.0.1',
database: 'Movies',
password: 'admin',
port: '5432'});

deleteMovie = async (req, res) => { 

    var movie = req.params.id;

    pool.query("DELETE FROM movieList WHERE id=" + movie.toString(), (err, resp) => {
        console.log(err, resp);
        success = {
            response: movie.toString() + "Succesfully deleted!",
          }
        res.send(success)
    });

}

module.exports = deleteMovie;