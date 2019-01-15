const express = require('express')
const graphqlHTTP = require('express-graphql') // Convention for express-graphql
// Creates an express server to run the graphql api on a single endpoint

const schema = require('./schema/schema')


const app = express()



// app.use('/graphql', graphqlHTTP({})) - base syntax //
    // `schema` must be passed into graphqlHTTP to tell our graphql what data we have, and how
    // the different data types are related
    // We will define our entry points for searching our graph for data
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))



app.listen(5858, () => {
    console.log("Server is running on Port 5858")
})


