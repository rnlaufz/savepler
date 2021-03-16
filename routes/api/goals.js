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

    const {goal, sum, currency, added} = req.body

    // Create new goal and the history record
    try {
        const createGoal = new Goal({
        goal: goal.trim(),
        sum,
        currency,
        added: added ? added : 0,
        lended: 0,
        residue: added > 0 ? sum - added : sum - 0,
        user: req.user.id

        })

        // Add record of goal creation
        const addHistoryRecord = new History({
            action: 'Goal created',
            amount: 0,
            currency: currency,
            user: req.user.id
        })

        // If user has saving on goal creation step, add record
        const actionRecord = added > 0 ? new History({
            action: 'add',
            amount: added,
            currency: currency,
            user: req.user.id
        }) : null;

     await createGoal.save();
     await addHistoryRecord.save();
     await actionRecord.save();
     return res.json(createGoal)

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
// @route   POST api/goals/me
// @desc    Update logged in user's goal data (name, sum, currency)
// @access  Private

router.post('/me', auth, async (req, res) => {

    try {
        const goalData = await Goal.find({user: req.user.id}).sort({date: -1});
        const {_id, added, lended} = goalData[0];
        const {goal, sum, currency} = req.body;
        let updateGoal = await Goal.updateOne({_id: _id}, {$set: {goal: goal.trim(), sum: sum, currency: currency, residue: added > 0 ? sum - added + lended : sum - 0}});

        // Add history record
        const updateRecord = new History({
            action: 'Goal updated',
            amount: 0,
            currency: currency,
            user: req.user.id
        });

        await updateRecord.save()
        return res.json(updateGoal)
      
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})
// @route   POST api/goals/update
// @desc    Update goal data and add record to history 
// @access  Private

router.post('/update', auth, async (req, res) => {
// Get action type to add or lend money
    const {actionType, sendSum} = await req.body;
    try { 
        // Get user's current data
        const goalData = await Goal.find({user: req.user.id});
        // goalData is an array
        // Since there could be one goal at a time index finding is permittable
        const {_id, sum, added, lended, currency } = await goalData[0];
       
        // Check action type and send suitable request
        if(actionType === "add"){
            // Send add request & recount values of other fields
            let goal = await Goal.updateOne({_id: _id}, {$set:{added:added+sendSum, residue:sum-added-sendSum+lended}});
            // Get updated goal and check lended value - if it's not empty, then decrease it 
            goal = await Goal.updateOne({_id: _id, lended:{$gt: 0}}, {$set:{lended:lended-sendSum, residue:sum-added-sendSum+lended}})
            // Prevent negative left debt value
            goal = await Goal.updateOne({_id:_id, lended:{$lt: sendSum}}, {$set:{lended:0, residue:sum-added-sendSum+lended}})
            goal = await Goal.updateOne({_id:_id, residue:{$lt: 0}}, {$set:{residue:0}})
            // Add history record
            const addHistoryRecord = await new History({
                action: "add",
                amount: sendSum,
                currency: currency,
                user: req.user.id
            })
            await addHistoryRecord.save();
            return res.json(goal);
        }
        if(actionType === "lend"){
            // Send lend request & recount values of other fields
            let goal = await Goal.updateOne({_id:_id}, {$set:{lended:lended+sendSum, residue:sum-added+sendSum+lended, added: added-sendSum}});
            // Add history record
            const addHistoryRecord = await new History({
                action: "lend",
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