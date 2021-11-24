import express from 'express';
import simpleUsersRouter from "./routes/simpleUsersRouter.js";
import nestedUsersRouter from "./routes/nestedUsersRouter.js";
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');

const app = express();
const port = 3035;

app.use(express.json());
app.use("/simple_users",simpleUsersRouter);
app.use("/nested_users",nestedUsersRouter);

app.listen(port, () => {
	console.log(`API is now listening on port ${port}`);
});