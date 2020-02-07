const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const ctrl = require('./controller');



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


// ===============================================================================
//----- keep getting an error for massive function... commented out for now ------
//================================================================================
// massive(process.env.CONNECTION_STRING).then(database => {
//     app.set('db', database)
// });


app.use( express.static( `${__dirname}/../build` ) );



// Endpoints
app.post('/api/createCardList', ctrl.setCardToList);
// app.get('/api/getStuff', ctrl.getStuff);




const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log(`The server is listening on port: ${PORT}⛵️`)
});

