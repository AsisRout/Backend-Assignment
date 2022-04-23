const app = require("./index");
const mongoose = require("mongoose");

const port = 8081;

const DB = "mongodb://localhost:27017/backend-assignment";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
