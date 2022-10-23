import express from "express";

import getConfig from "config";
import { initializeDB } from "./db";

const { port } = getConfig();

const app = express();

const initializeServer = async (routes) => {
  // initialize DB
  try {
    // creating Server
    console.log("======================================================");
    console.log("       Inicialized Server with Mongo DB...");
    await initializeDB();
    console.log("       The server initialized successfully!");
    console.log("======================================================");

    // json parse
    app.use(express.json());

    // set urls
    app.use(routes);

    app.get("/", (req, res) => {
      res.send(`More Information: 
        Medicines: http://localhost:${port}/clinical/medicines, 
        Patients: http://localhost:${port}/clinical/patients, 
        Doctors: http://localhost:${port}/clinical/doctors, 
        Consultations: http://localhost:${port}/clinical/consultations`);
    });

    // create express app
    app.listen(port, () => {
      console.log(`Server on port: http://localhost:${port}, more information`);
    });
  } catch (err) {
    console.error(err);
  }
};

export default initializeServer;
