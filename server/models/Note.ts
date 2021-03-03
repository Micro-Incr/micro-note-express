import mongoose from 'mongoose';

const NoteSchems = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
   content: {
        type: String,
        required: true,
        trim: true
    },
})

export default mongoose.model('Note', NoteSchems)