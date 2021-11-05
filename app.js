// Sample empty node.js web api

import Express from "express";
import Testdata from "./Testdata.js";

const app = Express();

const port = 3000

app.get("/", (req, res) => {
    res.json(Testdata)
})

app.listen(port, () => {
    console.log("Listening on port: ", port)
})