const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();



const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    },
    deckCards: []
}));
// Middleware

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
}).catch(error => {
	console.log('error in massive', error);
	// res.status(500).send('something is wrong in massive set up')
})


app.use( express.static( `${__dirname}/../build` ) );

// Endpoints


const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log(`The server is listening on port: ${PORT}⛵️`)
});

