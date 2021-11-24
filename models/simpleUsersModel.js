import mongoose from 'mongoose';

const simpleUsersSchema = mongoose.Schema({
	firstName: String,
	lastName: String
},
	{ versionKey: false });

const SimpleUsersModel = mongoose.model("SimpleUser", simpleUsersSchema, "simpleUsers");

export default SimpleUsersModel;