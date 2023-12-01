const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const hostname = '127.0.0.1';
const port = 80;

app.use('/static', express.static('static')) 
app.use(express.urlencoded())

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Jharna', message: 'Hello there and thanks for telling me how to use pubG!' })
});

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Jharna");
});
app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Jharna");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Jharna");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website codewithjharna");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});