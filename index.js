const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

var tsAlbums = [
    {
        id:0,
        name: "Taylor Swift (debut)",
        released: 2006
    },
    {
        id:1,
        name: "Fearless",
        released: 2008
    },
    {
        id:2,
        name: "Speak Now",
        released: 2010
    },
    {
        id:3,
        name: "Red",
        released: 2012
    },
    {
        id:4,
        name: "1989",
        released: 2014
    },
    {
        id:5,
        name: "Reputation",
        released: 2017
    },
    {
        id:6,
        name: "Lover",
        released: 2019
    },
    {
        id:7,
        name: "Folklore",
        released: 2020
    },
    {
        id:8,
        name: "Evermore",
        released: 2020
    },
    {
        id:9,
        name: "Fearless (Taylor's Version)",
        released: 2021
    },
    {
        id:10,
        name: "Red (Taylor's Version)",
        released: 2021
    },
    {
        id:11,
        name: "Midnights",
        released: 2022
    },
    {
        id:12,
        name: "Speak Now",
        released: 2023
    },
    {
        id:13,
        name: "1989",
        released: 2023
    },
]

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.get("/tsalbums", (req,res)=>{
    res.send(tsAlbums);
})
app.post("/album",(req,res)=>{
    tsAlbums.push({id:req.body.id, name:req.body.name})
    res.send(`${JSON.stringify(tsAlbums)} created`)
})
app.delete("/album/:id", (req,res)=>{
    console.log('delete:id:'+req.params.id)
    tsAlbums = tsAlbums.filter(item=> item.id != req.params.id)
    res.send("albums left:"+JSON.stringify(tsAlbums));
})

app.listen(4000,()=>console.log('Listening on 4000'))