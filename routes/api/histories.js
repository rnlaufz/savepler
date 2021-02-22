const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth');
const History = require('../../models/History');

// @route api/histories/me 
// @desc get saving history | get all records
// @access private

router.get('/:page', auth, async (req, res) => {
    const page = req.params.page;
    try{
        const history = await History.find({user: req.user.id}).limit(14).skip(14 * page).sort({date: -1});
       return res.json(history)
    }catch(err){
        console.error(err.message)
        res.status(500).send("Server error")
    }
})
// @route api/histories/me 
// @desc get saving history | get five last records
// @access private

router.get('/me', auth, async (req, res) => {
    try{
        const history = await History.find({user: req.user.id}).sort({date: -1}).limit(5);
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