import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventname: {
        type: String,
        required: true
    },
    eventdesc: {
        type: String,
        required: true
    },
    eventdate: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    eventcapacity: {
        type: Number,
        required: true
    },
    qrcode: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})

export default mongoose.model('Events', eventSchema);