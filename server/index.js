const express = require("express");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const schema = require("./schema/schema.js");
const { graphqlHTTP } = require("express-graphql");

dotenv.config();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
