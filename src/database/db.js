const mongoose = require('mongoose')

const connectDatabase = async () =>{
    console.log('Wait...connecting to database...')

    await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log('Connected successfully.')
}


module.exports = connectDatabase;