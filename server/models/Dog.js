const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

// type is the data type (String, Number, Date, Boolean, etc).
// required is whether or not the field is required to allow a document to be created
// trim is whether or not the field should strip spaces before and after value
// unique is whether or not the field must be a unique value
// (meaning no two Dog object can have the same value for that field)
// min is the minimum numeric value
// max is the maximum numeric value
// default is the default value if one is not provided
// match is the format to match done through regex
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    breed: {
        type: String,
        required: true,
        trim: true,
        unique: false,  
    },
    
    age: {
        type: Number,
        min: 0,
        required: true,
    },

    createdData: {
        type: Date,
        default: Date.now,
    },

});

// Schema.statics are static methods attached to the Model or objects
DogSchema.statics.sayName = (dog) => {
    console.log(dog.name);
};

// Schema.statics are static methods attached to the Model or objects
DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    return DogModel.findOne(search, callback);
};

// Create the dog model based on the schema
DogModel = mongoose.model('Dog', DogSchema);


// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
