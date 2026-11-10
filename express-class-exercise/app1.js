import express from "express";

import greetRouter from "./routes/greet.js";

const app = express();

app.use(greetRouter);

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});