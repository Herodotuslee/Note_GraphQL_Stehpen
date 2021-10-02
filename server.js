const express = require('express');
// const expressGraphQL =require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema')
const app =express();

//!!! graphqlHTTP = middleware
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000,()=>{
  console.log('listening');
});
