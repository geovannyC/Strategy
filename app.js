const express = require('express');
const mallarDuck = require('./mallarDuck')
const decoryDuck = require('./decoryDuck')
const redHeadDuck= require('./redHeadDuck')
const rubbertDuck= require('./rubberDuck')

const app = express();

app.get("/duck",(req, res)=>{
    const my= req.params.id
    const mallar= new mallarDuck('Soy pepe Mallar');
    const decory= new decoryDuck('Soy de Decoracion')
    const red= new redHeadDuck('Soy de cabeza roja')
    const rubbert= new rubbertDuck('Soy rubbert')

    const mallarobj = {
        params: mallar,
        params2: mallar.quack(),
        params3: mallar.fly()
    }
    const decoryobj = {
        params: decory
    }
    
    const redobj = {
        params: red,
        params2:red.fly(),
        params3: red.quack()
    }
    
    const rubbertobj = {
        params: rubbert,
        params2: rubbert.quack()
    }
    
    res.json(Object.values(mallarobj))
    
    
})



module.exports = app;
