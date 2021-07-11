import mongoose, { ConnectOptions } from 'mongoose';
import config from './config/config';

const dbOptions: ConnectOptions = {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(config.DB.HOST, dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongodb connection stablished');
});

connection.on('error', error => {
    console.log(error);
    process.exit(0);
});
