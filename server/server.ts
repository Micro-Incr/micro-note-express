import app from './app';
import {DATABASE_URI, PORT} from './config/baseConfig';
import mongoose from 'mongoose';

mongoose.connect(DATABASE_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

});

