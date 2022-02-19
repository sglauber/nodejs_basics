const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb+srv://lonen:PwC2HDkfComD9Kk2@lonen-dev.znsvx.mongodb.net/database?retryWrites=true&w=majority`),
  (error) => {
    if (error) {
      return console.log("Error while trying to connect to database: ", error);
    }
    return console.log("Database connected successfully.");
  }
}

module.exports = connectToDatabase;