const mongoose = require('mongoose');
require('dotenv').config("../env");

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('base de datos conectada con exito');
    } catch (error){
        console.log(error);
        throw new Error ('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {dbConnection}