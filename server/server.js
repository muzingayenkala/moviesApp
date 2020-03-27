const cors = require('cors')
const express = require('express')
const moviesRoute = require('./app/routes/moviesRoute')

const app = express()
const port = 3000

app.use(cors());

app.use('/', moviesRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`))