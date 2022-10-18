const express = require ('express')
const contacta = require('../model/contact')

const router = express.Router()

router.post("/newContact",(req,res)=>{
    let newContactct = new contacta(req.body)
    newContactct.save((err,data)=>{
        if (err) throw err
        else{
            res.send({msg : "contact added sucessefuly"})
        }
})
})
module.exports = router