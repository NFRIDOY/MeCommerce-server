import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
      console.log(`Config the Cors Origin Before Deploying!!!\nDon't Use http://localhost:5000`);
    });
  } catch (err) {
    console.log("Error ==> ", err);
  }
}

main();
