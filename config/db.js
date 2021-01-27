const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');




const connectDB = async () => {
    try  {
       await mongoose.connect(db,
         {useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
         }
        );

       console.log("Database connected")
    } catch(err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1)
    }
}

// Export the code 
module.exports = connectDB;