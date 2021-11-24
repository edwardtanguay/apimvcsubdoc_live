import express from 'express';
import * as SimpleUsersController from './controllers/simpleUsersController.js';
import * as NestedUsersController from './controllers/nestedUsersController.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');

const app = express();
const port = 3035;

app.use(express.json());

// simple users: READ
app.get('/simpleUsers', async (req, res) => {
	res.json({
		simpleUsers: await SimpleUsersController.getAllSimpleUsers()
	});
});

// simple users: CREATE
app.post('/simpleUsers/create', async (req, res) => {
	const simpleUserObj = req.body;
	const result = await SimpleUsersController.createSimpleUser(simpleUserObj);
	res.json({
		result
	});
});

// simple users: UPDATE
app.patch('/simpleUsers/update/:id', async (req, res) => {
	const id = req.params.id;
	const updateFields = req.body
	const result = await SimpleUsersController.updateSimpleUser(id, updateFields);
	res.json({
		result
	});
});

// simple users: DELETE
app.delete('/simpleUsers/delete/:id', async (req, res) => {
	const id = req.params.id;
	const result = await SimpleUsersController.deleteSimpleUser(id);
	res.json({
		result
	});
});

// === NESTED USERS ================================

// nested users: READ
app.get('/nestedUsers', async (req, res) => {
	res.json({
		nestedUsers: await NestedUsersController.getAllNestedUsers()
	});
});

// nested users: READ
app.get('/nestedUsers/emails', async (req, res) => {
	res.json({
		nestedUsers: await NestedUsersController.getAllNestedUsersEmails()
	});
});

// nested users: READ
app.get('/nestedUsers/accountHistory/:id', async (req, res) => {
	const id = req.params.id;
	res.json({
		nestedUsers: await NestedUsersController.getAccountHistoryOfNestedUser(id)
	});
});

// nested users: CREATE
app.post('/nestedUsers/create', async (req, res) => {
	const nestedUser = req.body;
	await NestedUsersController.createNestedUser(nestedUser, (result) => {
		res.json({
			result
		});
	});
});

// nested users: UPDATE
app.patch('/nestedUsers/update/:id', async (req, res) => {
	const id = req.params.id;
	const updateFields = req.body
	const result = await NestedUsersController.updateNestedUser(id, updateFields);
	res.json({
		result
	});
});

// nested users: DELETE
app.post('/nestedUsers/delete/:id', async (req, res) => {
	const id = req.params.id;
	const result = await NestedUsersController.deleteNestedUser(id);
	res.json({
		result
	});
});

app.listen(port, () => {
	console.log(`API is now listening on port ${port}`);
});