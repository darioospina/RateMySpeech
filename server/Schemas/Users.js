import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // type: Array,
        // items: { type: "string" },
        // default: []
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    avescore: {
        type: Number,
        default: 0.00
    }
  })
  
export default mongoose.model('Users', userSchema);







  
  
  
  
  
  
  