const express=require('express')
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(bodyParser.urlencoded({extended:false}));
// app.use(methodOverride('_method'));
app.use(cors(corsOptions))
app.use(bodyParser.json());


app.use('/auth', routes.auth);
app.use('/user', routes.user);
app.use('/items', routes.items);



app.listen(3001, ()=>{console.log(" I am listening at port 3001")})


