const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const session = require('express-session')


const startServerGraphQL = require('./server-graph-ql')
const connectDB = require('./data/connect')
const auth = require('./middlewares/is-auth')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use( auth)


const PORT = 5000

connectDB()
startServerGraphQL(app);

app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}/graphql`))
