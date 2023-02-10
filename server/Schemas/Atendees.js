import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const attendeesSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Events',
        required: true
    }
})

export default mongoose.model('Atendees', attendeesSchema);