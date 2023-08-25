const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const mongoose = require("./models/mongoose");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});
