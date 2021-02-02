const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {validationResult, check} = require('express-validator');
const bcrypt = require('bcryptjs');

const config = require('config')

// Import middleware
const auth = require('../../middleware/auth');


const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test Route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user) 
    } catch(err) {
        console.error(err.message)
        res.status(500).json({message: 'Server error'});
    }
});

// @route   POST api/auth
// @desc    Authenticate user && get token
// @access  Public
router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    // Make password validation more difficult
    check('password', 'Password required').exists()
], 

async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;

    try {
        
    // See if the user exists 
       let user = await User.findOne({email});
       
       if(!user){
          return res.status(401).json({errors: [{message: "Invalid email or password"}]});
       }

    //    Match the password and the email
       const isMatch = await bcrypt.compare(password, user.password);

       if(!isMatch){
        return res.status(401).json({errors: [{message: "Invalid email or password"}]});
       }

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


module.exports = router;