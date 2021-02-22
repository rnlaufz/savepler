const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth');
const History = require('../../models/History');

let pageLimit

// @route api/histories/me 
// @desc get saving history | get all records
// @access private

router.get('/:page', auth, async (req, res) => {
    const page = req.params.page;
    pageLimit = 15
    try{
        const countRecords = await History.find({user: req.user.id}).countDocuments()
        while(countRecords >= pageLimit){
            const history = await History.find({user: req.user.id}).sort({date: -1}).limit(pageLimit).skip(pageLimit * page);
            return res.json(history)
        }
       
    }catch(err){
        console.error(err.message)
        res.status(500).send("Server error")
    }
})
// @route api/histories/me 
// @desc get saving history | get five last records
// @access private

router.get('/me', auth, async (req, res) => {
    pageLimit=5
    try{
        const history = await History.find({user: req.user.id}).sort({date: -1}).limit(pageLimit);
       return res.json(history)
    }catch(err){
        console.error(err.message)
        res.status(500).send("Server error")
    }
})
// @route api/histories/me 
// @desc delete records if user or goal were deleted
// @access private

router.delete('/me', auth, async (req, res) => {
    try{
        const history = await History.deleteMany({user: req.user.id});
       return res.json(history)
    } catch(err){
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// Request for dev purpuses, delete on testing
// router.delete('/',  async (req, res) => {
//     try{
//         const history = await History.remove({});
//        return res.json(history)
//     } catch(err){
//         console.error(err.message)
//         res.status(500).send("Server error")
//     }
// })

module.exports = router;