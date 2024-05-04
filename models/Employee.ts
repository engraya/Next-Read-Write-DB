import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
}, {timestamps: true})

export default mongoose?.models?.Employee || mongoose.model("Employee", EmployeeSchema)