import mongoose from 'mongoose'
import mogoose from 'mongoose'
const structure = new mogoose.Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }  
})

const userData = mongoose.model('userData',structure);

export default userData;