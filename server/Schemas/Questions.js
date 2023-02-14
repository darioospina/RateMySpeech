import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Events',
        required: true
    }
})

export default mongoose.model('Questions', questionsSchema);