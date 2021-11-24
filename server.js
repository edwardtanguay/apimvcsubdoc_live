import express from 'express';
import * as SimpleUsersController from './controllers/simpleUsersController.js';
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


app.listen(port, () => {
	console.log(`API is now listening on port ${port}`);
});