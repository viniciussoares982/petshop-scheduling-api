import { Router } from 'express'

import authRoutes from '@app/Auth/routes'
import usersRutes from '@app/Users/routes'

const routes = Router()

routes.use(authRoutes)
routes.use(usersRutes)

export default routes
