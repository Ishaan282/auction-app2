import mongoose from 'mongoose';

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "auction-platform"
    }) 
    .then(() => console.log('connected to DB'))
    .catch(error => console.log(`something went wrong :- ${error}`));
}