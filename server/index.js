const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const schema = require("./schema/schema.js");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("../config/db.js");
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
