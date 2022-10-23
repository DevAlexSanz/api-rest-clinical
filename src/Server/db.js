import mongoose from "mongoose";
import getConfig from "config";

const { database } = getConfig();

export const initializeDB = async (callback) => {
  try {
    await mongoose.connect(database.uri, database.options, callback);
    console.log(`======================================================
            MongoDB connect successfully
======================================================
    `);
    return mongoose;
  } catch (error) {
    console.log("***** Mongoose failed connection *****");
    console.error(error);
    return null;
  }
};
