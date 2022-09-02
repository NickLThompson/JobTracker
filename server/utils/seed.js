const connection = require("../config/connection");
const { Jobs } = require("../models/Jobs")

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected")
})