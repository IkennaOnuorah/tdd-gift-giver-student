const express = require("express")

const router = express.Router()


router.post('/pairs', (req,res) => {
    res.send("pairs posted")
})

router.post('/traditional', (req,res) => {
    res.send("traditional posted")
})



module.exports = router