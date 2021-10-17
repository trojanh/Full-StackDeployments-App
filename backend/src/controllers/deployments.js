import {} from 'mongoose'
import { Deployments } from '../models/index.js'

export async function createDeployments(request, response) {
  try {
    console.log({...request.body});
    const data = await Deployments.create(request.body)

    return response.status(200).json({
      code: 0,
      msg: 'Success',
      data
    })
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      code: 1,
      msg: 'error',
      error: error.message
    })
  }
}

export async function fetchDeployments(request, response) {
  try {

    const data = await Deployments.find({},{ __v: 0})

    return response.status(200).json({
      code: 0,
      msg: 'Success',
      data
    })
  } catch (error) {
    return response.status(500).json({
      code: 1,
      msg: 'error',
      error: error.message
    })
  }
}

export async function deleteDeployment(request, response) {
  try {
    const { id } = request.params
    const data = await Deployments.findByIdAndRemove({ _id: id }, { _id: 1})
    if (!data) return response.status(404).json({
      code: 1,
      msg: 'error',
      error: 'deployment not found!!'
    })

    return response.status(200).json({
      code: 0,
      msg: 'Success',
      data: data._id
    })
  } catch (error) {
    console.log(error)
    return response.status(500).json({
      code: 1,
      msg: 'error',
      error: error.message
    })
  }
}
