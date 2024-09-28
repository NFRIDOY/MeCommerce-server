import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
      console.log(`Config the Cors Oring Before Deploying`);
    });
  } catch (err) {
    console.log("Error ==> ", err);
  }
}

main();
