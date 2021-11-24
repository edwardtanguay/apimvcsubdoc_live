import express from 'express';
import * as SimpleUsersController from '../controllers/simpleUsersController.js';

const router = express.Router();

// simple users: READ
router.get('/', async (req, res) => {
	res.json({
		simpleUsers: await SimpleUsersController.getAllSimpleUsers()
	});
});

// simple users: CREATE
router.post('/create', async (req, res) => {
	const simpleUserObj = req.body;
	const result = await SimpleUsersController.createSimpleUser(simpleUserObj);
	res.json({
		result
	});
});

// simple users: UPDATE
router.patch('/update/:id', async (req, res) => {
	const id = req.params.id;
	const updateFields = req.body
	const result = await SimpleUsersController.updateSimpleUser(id, updateFields);
	res.json({
		result
	});
});

// simple users: DELETE
router.delete('/delete/:id', async (req, res) => {
	const id = req.params.id;
	const result = await SimpleUsersController.deleteSimpleUser(id);
	res.json({
		result
	});
});

export default router;
