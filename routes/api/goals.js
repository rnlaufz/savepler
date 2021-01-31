const express = require('express');
const {validationResult, check} = require('express-validator');
const router = express.Router();

const auth = require('../../middleware/auth');
const Goal = require('../../models/Goal');
const History = require('../../models/History');
const { find } = require('../../models/Goal');



// @route   POST api/goals
// @desc    Create Goal 
// @access  Private
router.post('/', 
[
    auth, 
    [
       check('goal', 'Goal name is required').not().isEmpty(), 
       check('sum', 'Please define the sum').not().isEmpty(),
       check('currency', 'Please define the currnecy').not().isEmpty(), 
    ]
], 
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {goal, sum, currency} = req.body

    // Create new goal and the history record
    try {
        const createGoal = new Goal({
        goal,
        sum,
        currency,
        added: 0,
        lended: 0,
        residue: sum - 0,
        user: req.user.id

        })
        const addHistoryRecord = new History({
            action: `Goal "${goal}" created`,
            amount: 0,
            currency: currency,
            user: req.user.id
        })

     await createGoal.save();
     await addHistoryRecord.save();
     return res.status(200).send('Goal created')

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
// @route   POST api/goals/update
// @desc    Update goal data and add record to history 
// @access  Private

router.post('/:action', auth, async (req, res) => {
// Get action type to add or lend money
    try {
        const actionType = req.params.action;
        // Get user's current data
        const goalData = await Goal.find({user: req.user.id});
        // goalData is an array
        // Since there could be one goal at a time index finding is permittable
        const {sum, added, lended, currency }= await goalData[0];
        const {sendSum} = await req.body
        // Check action type and send suitable request
        if(actionType === "add"){
            // Send add request & recount values of other fields
            let goal = await Goal.updateOne({_id: req.body._id}, {$set:{added:added+sendSum, residue:sum-added-sendSum+lended}});
            // Add history record
            const addHistoryRecord = await new History({
                action: 'add',
                amount: sendSum,
                currency: currency,
                user: req.user.id
            })
            await addHistoryRecord.save();
            return res.json(goal);
        }
        if(actionType === "lend"){
            // Send lend request & recount values of other fields
            let goal = await Goal.updateOne({_id: req.body._id}, {$set:{lended:lended+sendSum, residue:sum-added+sendSum+lended}});
            // Add history record
            const addHistoryRecord = await new History({
                action: 'lend',
                amount: sendSum,
                currency: currency,
                user: req.user.id
            })
            await addHistoryRecord.save();
            return res.json(goal);
        }   
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})


// @route   DELETE api/goals/id
// @desc    Delete current goal 
// @access  Private

router.delete('/:id', auth, async (req, res) => {

    try {
        const id = await req.params.id
        const goal = await Goal.findOneAndDelete({_id: id});
        res.status(200).send('Goal deleted')
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

module.exports = router;