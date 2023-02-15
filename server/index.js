const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const schema = require("./schema/schema.js");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db.js");
const path = require("path");
dotenv.config();

const app = express();
app.use(cors());
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
