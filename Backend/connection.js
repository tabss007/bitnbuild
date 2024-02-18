const mongoose = require('mongoose');

const uri = 'mongodb+srv://tanvibhide007:hackerizzz@cluster0.wnheavr.mongodb.net/healthcare?retryWrites=true&w=majority';

async function connectToDatabase(){
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
}


module.exports = connectToDatabase;