const express = require('express')
const getMovies = require('../controllers/moviesController')
const deleteMovie = require('../controllers/deleteMoviesController')
const getMoviebyID = require('../controllers/getMoviebyID')
const addMovie = require('../controllers/addMoviecontroller')
const updateMovie = require('../controllers/updateMovie')

const router = express.Router();

router.get('/', getMovies)
router.delete('/:id', deleteMovie);
router.get('/:id', getMoviebyID);
router.post('/', addMovie);
router.put('/:id', updateMovie);

module.exports = router;