const express = require('express')
const cors = require('cors')

const startServerGraphQL = require('./server-graph-ql')
const connectDB = require('./data/connect')

const app = express()
app.use(cors())

const PORT = 3000

connectDB()
startServerGraphQL(app);

app.listen(PORT, () => console.log(`Server ready at http://localhost:3000/graphql`))
