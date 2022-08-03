import { Router } from "express";
import CreateUserController from "../controllers/CreateUserController";
import DeleteUserController from "../controllers/DeleteUserController";
import GetAllUserController from "../controllers/GetAllUserController";
import UpdateUserController from "../controllers/UpdateUserController";

const usersRoute = Router()
const createUserController = new CreateUserController()
const getAllUserController = new GetAllUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

usersRoute.post('/users', createUserController.handle)
usersRoute.get('/users', getAllUserController.handle)
usersRoute.patch('/user', updateUserController.handle)
usersRoute.delete('/user/:id', deleteUserController.handle)

export default usersRoute