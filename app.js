const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

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

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Taylor Swift Albums API",
            version: "1.0.0"
        }
    },
        apis: ["app.js"]
}
/**
 * @swagger
 * /tsalbums:
 *  get:
 *      summary: get all albums
 *      produces:
 *          application/json
 *  responses:
 *      200: success
 *      description : an array of Taylor Swift albums
 *      schema:
 *          $ref: "#definitions/album"
 * definitions:
 *  album:
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 *          released:
 *              type: integer
 * 
 * 
 */


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.get("/tsalbums", (req,res)=>{
    res.send(tsAlbums);
})

/**
 * @swagger
 * /album:
 *  post:
 *      summary: add an album
 *      requestBody:
 *          $ref: '#/components/requestBodies/AlbumBody'
 *      required:
 *          -id:
 *          -name:
 * responses:
 *          201:
 *              description: created album
 *
 * definitions:
 *  album:
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 *          released: 
 *              type: integer
 * components:
 *  requestBodies:
 *      AlbumBody:
 *          description: A JSON object of album information
 *          required: true
 *          content:
 *              application/json:
 *              schema:
 *                  $ref: '#/definitions/album'
 *       
 */


app.post("/album",(req,res)=>{
    res.send(`${req.body.name} created`)
})


app.listen(4000,()=>console.log('Listening on 4000'))