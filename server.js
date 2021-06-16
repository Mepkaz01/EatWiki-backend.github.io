const express=require('express')
const app =express();
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
const routes=require('./routes');


app.use('/items',routes.items);
app.use('/user',routes.user)


app.listen(3001, ()=>{console.log(" I am listening at port 3001")})