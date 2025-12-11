import express from "express"
import { ENV } from "./config/env.js";

const app = express();

const port = ENV.PORT || 8000;

app.listen(port, () => {
  console.log("Server running on port: ", port);
});