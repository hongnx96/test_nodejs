const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const {} = 

const startServerGraphQL = require('./server-graph-ql')
const connectDB = require('./data/connect')

const app = express()
app.use(cors())
app.use(logger('dev'))



const PORT = 5000

connectDB()
startServerGraphQL(app);

app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}/graphql`))
