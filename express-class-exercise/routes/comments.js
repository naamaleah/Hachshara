
import express from "express";
import { posts, comments } from "./posts.js";

const router = express.Router({
    mergeParams: true
});

// Middleware - Check if the post exists
router.use((req, res, next) => {
    const postId = Number(req.params.postId);

    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    next();
});

// GET - Get comments for a post
router.get("/", (req, res) => {
    const postId = req.params.postId;

    res.json(comments[postId] || []);
});

// POST - Add a comment to a post
router.post("/", (req, res) => {
    const postId = req.params.postId;

    const newComment = {
        id: Date.now(),
        text: req.body.text
    };

    comments[postId] = comments[postId] || [];

    comments[postId].push(newComment);

    res.status(201).json(newComment);
});

export default router;
