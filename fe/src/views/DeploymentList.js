import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CreateDeployment from '../components/CreateDeployment'
import DeploymentItem from '../components/DeploymentItem'
import addDeployment from '../services/addDeployment'
import fetchDeployments from '../services/fetchDeployments'

const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const deploymentList = useSelector((state) => state.deploymentList)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
      fetchDeployments().then(
        (data) => data && dispatch({ type: 'INIT_DEPLOYMENT', payload: data.data })
      )
      setIsLoading(false)
    // loadDeployments()
  }, [dispatch])

  const addNewDeployment = (inputData) => {
    // if(!data) console.log(data)
    return addDeployment(inputData)
      .then((response) => {
        if(!response.data) return
        console.log({ ...response.data })
        dispatch({
          type: 'ADD_DEPLOYMENT',
          payload: response.data
        })
        // console.log({ data })
      })
  }
  return (
    <div className="row">
      <h3 className="center-align white-text blue">Deployments</h3>

      <div className="row">
        <CreateDeployment addNewDeployment={addNewDeployment} />
      </div>
      <div className="row">
        {deploymentList.length > 0 ? (
          <table className="responsive-table">
            <tbody className="collection">
              {deploymentList.map((item) => {
                return <DeploymentItem key={item._id} item={item} />
              })}
            </tbody>
          </table>
        ) : (
          <p className="center-align">
            You don't have deployments! Please add a new one.
          </p>
        )}
      </div>
    </div>
  )
}

export default TodoList
