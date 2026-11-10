import express from "express";

import usersRouter from "./routes/users";
import postsRouter from "./routes/posts"
import commentsRouter from "./routes/comments"
const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/commenst", commentsRouter);


app.listen(3000, ()=>{
    console.log("listening ");
});