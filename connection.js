const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
async function connectToDb(url){
    try{
        await mongoose.connect(url);
        // console.log('Connected to the database');
    }catch(err){
        console.error("Error in connecting to database",err);
    }
}

module.exports = {connectToDb};



