const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("bd Conectada2");
  } catch (error) {
    console.log("tenemos un error");
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarDB;
