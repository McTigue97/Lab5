const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Listening at base address
//when request comes in it will send a response back
//req = request res = response
//when localhost:3000 is run in browser 'Hello World' will be displayed
app.get('/', (req, res) => {
  res.send('Hello World!');
})

//listening at /test Address
//we are sending a file back to /test using sendFile
//we are sending back index.html
app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

//listening at /name address
//can be same as this is a POST method
//will send fname and lname from index and display it 
app.post('/name', (req,res) => {
    console.log(req.body);
    res.send("Hello "+req.body.fname+ " "+req.body.lname+ " from POST");
})

//listening at /name address
//will send fname and lname from index form and display user input saying "Hello James McTigue etc."
app.get('/name', (req,res) => {
    console.log(req.query.fname);
    res.send("Hello "+req.query.fname+ " " +req.query.lname);
})


//Listening at /DataRep address
//Listening for get method
//when localhost:3000/datarep is run in browser 'Hello From DataRep' will be displayed
app.get('/api/books', (req, res) => {
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title":"MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },{
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ];
            
//Displays books array                    
    res.status(200).json({
        mybooks:books
    })
})

app.get('/datarep', (req, res) => {
    res.send('Hello From DataRep');
})

//Listening at /hello address
//Listening for get method
//parameter being used in hello/:name, it pulls the parameter straight out of the url
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello' + req.params.name);
})


//Listens for port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//server must be restarted every time: node server.js