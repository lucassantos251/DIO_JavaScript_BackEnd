import { Router } from "express"
import indexRoute from "./routes/index.routes"
import usersRoute from "./routes/user.routes"

const routes = Router()

routes.use(indexRoute)

routes.use(usersRoute)


export default routes