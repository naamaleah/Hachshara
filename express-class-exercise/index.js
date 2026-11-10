const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());


app.get("/greet", (req, res) => {
    const timeStamp = new Date().toISOString

    res.json({
        msg: `hi from get endpoint ${timeStamp}`
    });
});


app.get("/greet/:name", (req, res) => {

    const name = req.params.name;
    
    console.log(`i got name: ${name}`);

    res.json({
        msg: `got name: ${name}`
    });
});


app.get("/test", async (req, res)=>{
    const name = "Bob";


    try{
        const response = await fetch(`http://localhost:${PORT}/greet/${name}`);

        const data = await response.json();
        

        if( 
            response.ok &&
            Object.hasOwn(data, "msg") &&
            data.msg === `got name: ${name}`
        ){
            res.json({
                result: "ok"
            });
        }else{
            res.json({result:"fail"});
        }
    }
    catch(error){
        console.error(error);
        res.json({result:"fail"});
    }
    

});


app.post("/action", async (req, res)=>{

    const body = req.body;

    if(
        !body ||
        typeof body !== "object" ||
        Array.isArray(body) ||
        Object.keys(body).length !== 1 ||
        !Object.hasOwn(body, "action") ||
        !["joke", "cat fact"].includes(body.action)    
    ){
        return res.status(400).json({
            msg: "body is malformed"
        });

    }

  
if (body.action === "joke") {
    try {
        const response = await fetch(
            "https://icanhazdadjoke.com/",
            {
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Joke API failed: ${response.status}`);
        }

        const data = await response.json();

        const joke = data.joke.toUpperCase();

        return res.json({ joke });

    } catch (error) {
        console.error(error);

        return res.status(502).json({
            msg: "external API error"
        });
    }
}

    if (body.action === "cat fact")
    {
        try{
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=11", {
                headers: {
                    "x-api-key": process.env.CAT_API_KEY
                }
            });
            if (!response.ok)
                throw new Error("cat api faild");
            
            const data = await (response).json();

            return res.json({length:data.length});
        }
        catch(error)
        {
            console.error(error);

            return res.status(502).json({
            msg: "external API error"
        });
        }
    }
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});