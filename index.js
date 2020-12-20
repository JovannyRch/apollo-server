const {ApolloServer, gql} = require('apollo-server');
const typeDefs = require('./db/squema');
const resolvers = require('./db/resolvers');




//server
const server = new ApolloServer({
    typeDefs,
    resolvers 
});


//run server 
server.listen().then( ({url}) => {
    console.log(`Server on ${url}`);
});