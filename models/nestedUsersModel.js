import mongoose from 'mongoose';

const nestedUsersSchema = mongoose.Schema({
	name: { type: String, required: true },
	username: String,
	email: String,
	address: {
		street: String,
		suite: String,
		city: String,
		zipcode: String
	},
	phone: String,
	website: String,
	company: String,
	accountHistory: [{
		amount: Number,
		date: Date,
		purchase: String
	}]
},
	{
		versionKey: false,
		collection: "nestedUsers"
	});

const NestedUsersModel = mongoose.model("NestedUser", nestedUsersSchema);

export default NestedUsersModel;