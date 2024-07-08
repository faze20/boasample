("use strict");

import express from 'express';
// import bodyParser from 'body-parser';
import dotenv from 'dotenv/config.js';
import cors from 'cors';
import { createServer } from "http";
import * as path from 'path';



const app = express();
//bodyparser middleware
app.use(express.json());

const __dirname = path.resolve();

app.use(express.static(__dirname + '/public/'));

app.use(express.urlencoded({ extended: true }));


app.use(cors());

const server = createServer(app);

const PORT = process.env.PORT || 5200;

app.get("/", (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.get("/services", (req, res) => {
    res.sendFile('public/services.html', { root: __dirname });
});
app.get("/contact", (req, res) => {
    res.sendFile('public/contact.html', { root: __dirname });
});

server.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
}); 