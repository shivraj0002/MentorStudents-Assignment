const mongoose = require("mongoose");

const DB = process.env.MONGO_URL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!: ✅"))
  .catch((e) => console.log("DB connection failed!: ❌"));

module.exports = mongoose;
