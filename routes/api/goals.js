const express = require('express');
const {validationResult, check} = require('express-validator');
const router = express.Router();

const auth = require('../../middleware/auth');
const Goal = require('../../models/Goal');
const { find } = require('../../models/Goal');



// @route   POST api/goals
// @desc    Create Goal 
// @access  Private
router.post('/', 
[
    auth, 
    [
       check('goal', 'Goal is required').not().isEmpty() 
    ]
], 
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {goal, sum, currency, added, lended, residue} = req.body

    try {
        const createGoal = new Goal({
        goal,
        sum,
        currency,
        added,
        lended,
        residue,
        user: req.user.id

        })

     await createGoal.save();

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

    
});

// @route   GET api/goals/me
// @desc    Get logged in user's goal 
// @access  Private

router.get('/me', auth, async (req, res) => {

    try {

        const goalData = await Goal.find({user: req.user.id}).sort({date: -1});
        res.json(goalData)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

module.exports = router;