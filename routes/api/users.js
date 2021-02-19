const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult, check} = require('express-validator');


const config = require('config');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Name required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    // Make password validation more difficlt
    check('password', 'Password must include 6 or more characters').isLength({min: 6})
], 

async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name, email, password} = req.body;

    try {
        
    // See if the user exists 
       let user = await User.findOne({email});
       
       if(user){
          return res.status(400).json({errors: [{message: "User already exists"}]});
       }

    // Create user instance
    user = new User({
        name,
        email,
        password
    })

    // Encrypt password
    const salt =  await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return jsonwebtoken

    const payload = {
       user: {
        id: user.id
        }
    }

    jwt.sign(
        payload, 
        config.get('secret'),
        //@TO_DO change expiresIn value to less | current is for testing
        {expiresIn: 360000},
        (err, token) => {
            if(err) throw err;
             res.json({token});      
        } 
        );
    } catch(err){

        console.error(err.message);
        res.status(500).send('Server error')

    }


    
});
// @route   POST api/users/me
// @desc    Change email
// @access  Private
router.post('/me', auth, [
    check('email', 'Please enter a valid email').isEmail(),
], 

async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email} = req.body;

    try {
        
    // See if new email is registered 
     let findUser = await User.findOne({email});
       
     if(findUser){
        return res.status(400).json({errors: [{message: "User already exists"}]});
     }

       let user = await User.updateOne({_id:req.user.id}, {$set:{email:email}});
       return res.json(user)
   
    } catch(err){

        console.error(err.message);
        res.status(500).send('Server error')

    }


    
});

// @route   DELETE api/user
// @desc    Delete user
// @access  Private

router.delete('/', auth, async (req, res) => {
    try {
        // Delete currently logged in user 
        await User.findOneAndDelete({_id: req.user.id});

        res.json({message: "User removed"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})

module.exports = router;