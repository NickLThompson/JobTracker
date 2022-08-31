import { Schema, Model } from "mongoose";

// schema to create a job I've applied to with all details
const jobSchema = new Schema({
    position: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    postedOn: {
        type: String,
        required: false,
    },
    closeBy: {
        type: Boolean,
        required: true,
    },
    salary: {
        type, Number,
        required: true,
    },
    easyApply: {
        type: Boolean,
        required: false,
    },
    appliedOn: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
},
{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
});