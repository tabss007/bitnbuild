const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Patient = require('./Models/Patient')

router.post('/signup',async (req,res)=>{
    const data = req.body;
    //console.log(email);
    
    Patient.insertOne(data).then(val =>{
        console.log("Registered successfullly");
    }).catch(err =>{
        console.log(err);
    })
})

module.exports = router;