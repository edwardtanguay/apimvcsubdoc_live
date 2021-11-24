import express from 'express';
import * as NestedUsersController from '../controllers/nestedUsersController.js';

const router = express.Router();

router.get('/', async (req, res) => {
	res.json({
		nestedUsers: await NestedUsersController.getAllNestedUsers()
	});
});

router.get('/emails', async (req, res) => {
	res.json({
		nestedUsers: await NestedUsersController.getAllNestedUsersEmails()
	});
});

router.get('/accountHistory/:id', async (req, res) => {
	const id = req.params.id;
	res.json({
		nestedUsers: await NestedUsersController.getAccountHistoryOfNestedUser(id)
	});
});

router.post('/create', async (req, res) => {
	const nestedUser = req.body;
	await NestedUsersController.createNestedUser(nestedUser, (result) => {
		res.json({
			result
		});
	});
});

router.patch('/update/:id', async (req, res) => {
	const id = req.params.id;
	const updateFields = req.body
	const result = await NestedUsersController.updateNestedUser(id, updateFields);
	res.json({
		result
	});
});

export default router;