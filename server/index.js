const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();



const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: '987645589oiuytgfjyur58989768767iu',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    },
    deckCards: []
}));
// Middleware

massive(`postgres://zfshdcrxwwfdby:8348e55fa2759e9e659d0bf1de07001ba4e7b900a63342f3916ce161b92697f7@ec2-174-129-33-230.compute-1.amazonaws.com:5432/dac7n2mh40entf?ssl=true`).then(database => {
	
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
	// console.log('process', process.env)
    console.log(`The server is listening on port: ${PORT}⛵️`)
});

