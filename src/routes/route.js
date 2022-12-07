const express = require('express')
const router = express.Router()
const controller = require('../controllers/bitController')

// router.get('/test', function(req,res){
//     res.send("test is done")
// })

router.get('/assets', controller.crypto)

router.all('/*', function(req,res){
    return res.status(500).send({status:false, message:"Provided route url is wrong"})
})

module.exports = router