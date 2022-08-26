import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";
let root = resolvers;

const app = express();
const uri = `mongodb+srv://Jeet:Jeet%401991@freecluster.ehj5s.mongodb.net/graphql-test?retryWrites=true&w=majority`;
// Prints "MongoServerError: bad auth Authentication failed."
mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.reason));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.get("/home", (req, res) => {
  res.send("Hello graphql");
});

app.listen(3000, () => {
  console.log("server listening on localhost:3000/graphql");
});
