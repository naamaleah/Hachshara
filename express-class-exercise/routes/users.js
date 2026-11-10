import express from "express";

const router = express.Router();

let users =[{id:1, name:'Alice'}];

router.get("/", (req, res)=>{
    res.json(users);
});

router.post("/", (req, res)=>{
    const newUser = {
        id:Date.now(),
         name:req.body.name
    };
    users.push(newUser);

    res.status(201).json(newUser);

});

router.get("/:id", (req, res)=>{

    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({
            message:"User not found"
        });
    }

    res.json(user);

});

router.put("/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>user.id === id);

    if(!user){
        return res.status(404).json({
            message:"User not found "
        });
    }

    user.name = req.body.name;
    res.json(user);
});


router.delete("/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({message:"User not found"});
    }

    users = users.filter(user => user.id !== id);

    res.status(204).send();

});

router.get("/users", (req, res)=>{

});


export default router;