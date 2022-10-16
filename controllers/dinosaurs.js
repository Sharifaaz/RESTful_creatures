const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/',(req,res)=>{
   let dinosaurs = fs.readFileSync('./dinosaurs.json')
   let dinoData =JSON.parse(dinosaurs)
   res.render('dinosaurs/index',{myDinos:dinoData})
  
})

router.get('/new',(req,res)=>{
    res.render('dinosaurs/new')
})


router.get('/:index',(req,res)=>{
    // get the dinosaurs 
    let dinosaurs =fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs);
    console.log('This is the req.parms object!',req.parms)
    let dinoIndex = parseInto(req.params.index)
    res.render('dinosaur/show',{myDino: dinoData[dinoIndex]})
   })

router.post('/',(req,res)=>{
    console.log('This is the Request Body: ',req.body)
    res.redirect('/dinosaurs')
})
module.exports = router;