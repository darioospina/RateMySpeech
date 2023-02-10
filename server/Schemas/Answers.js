import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const answersSchema = new Schema({
    answer: {
        type: Number,
        required: true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Questions',
        required: true
    },
    attendeeId: {
        type: Schema.Types.ObjectId,
        ref: 'Atendees',
        required: true
    }
})

export default mongoose.model('Answers', answersSchema);
