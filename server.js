// const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());


const users = [
    {name: 'Carlos V', age: 53},
    {name: 'Juan', age: 35},
    {name: 'Robert', age: 33},
    ];
    
    app.get('/', (req,res ) => {
        res.json(users)
    });
    app.post('/', (request,response ) => {
        const data = request.body         
        console.log(data)
        response.json({"msg":"post", "data" : data})
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up & running... Port ${PORT}`);
});
