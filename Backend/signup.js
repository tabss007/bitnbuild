const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Patient = require('./Models/Patient')

router.post('/signup',async (req,res)=>{
    const {email,password,fname,lname,contact} = req.body;
    //console.log(email);
    
    Patient.create({
        email: email,
        password: password,
        fname:fname,
        lname:lname,
        contact:contact
    })
    .then(newPatient => {
        console.log('New patient created:', newPatient);
        res.send({status:'ok'});
    })
    .catch(error => {
        console.error('Error creating new patient:', error);
    });
})

module.exports = router;