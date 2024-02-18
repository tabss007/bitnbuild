const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Patient = require('./Models/Patient')


router.post('/login',async (req,res)=>{
    const { email, password } = req.body;
    console.log(email);
    
    Patient.findOne({email}).then(pat =>{
        if(pat.password == password)
        {
            //res.status(200).send("Login successfull");
            res.send({status:"ok"});
        }
        else
        {
            res.status(401).send("Wrong password");
        }
        console.log("patients are ",pat);
    }).catch(err =>{
        res.status(404).send("Login failed")
        console.log(err);
    })
})

module.exports = router;