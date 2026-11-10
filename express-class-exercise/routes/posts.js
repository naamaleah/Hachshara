import express from "express";
import commentsRouter from "./comments.js";

const router = express.Router();

export const posts = [
    { id: 1, title: "Hello" }
];

export const comments = {
    1: []
};

router.get("/", (req, res)=>{
    res.json(posts);
});

router.get("/:postId",(req,res)=>{
    const id = Number(req.params.postId);
    const post = posts.find(post => post.id === id);
    if(!post){
        return res.status(404).json({message:"Post not found"});
    }

    res.status(201).json(post);
});

router.use("/:postId/comments", commentsRouter);

export default router;