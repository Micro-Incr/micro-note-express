import 'dotenv/config';
import mongoose from 'mongoose';

export const connectToDatabase = () => {
    mongoose.connect(process.env.DATABASE_URI_TEST!,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }).then(() => {
        // console.log('Connected to the database')
    })
}

export default connectToDatabase;