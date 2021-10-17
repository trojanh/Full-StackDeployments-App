import express from 'express'
import {
  createDeployments,
  deleteDeployment,
  fetchDeployments
} from '../controllers/deployments.js'
import { deploymentsValidator, validateParams } from '../validations/index.js'

const routes = express.Router()

routes.get('/deployments', fetchDeployments)
routes.post(
  '/deployments',
  validateParams(deploymentsValidator),
  createDeployments
)
routes.delete('/deployments/:id', deleteDeployment)
routes.use('*', invalidRoutes)

function invalidRoutes(request, response) {
  return response.status(404).json({
    code: 1,
    msg: 'Route not found'
  })
}

export default routes
