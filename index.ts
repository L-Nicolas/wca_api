import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import schema from "./schema";
import defaultQuery from "./queries/defaultQuery";

dotenv.config();

const PORT = process.env.PORT || 3100;
const app = express();

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: {
      defaultQuery,
    },
  })
);
app.use("/", (_, res) => {
  res.redirect("/graphql");
});

/**
 * Port definition
 */
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
