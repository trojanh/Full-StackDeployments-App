function deleteDeployment(id) {
  return fetch(process.env.REACT_APP_API_BASE_URL + '/deployments/' + id, {
    method: 'DELETE'
  }).then((resp) => resp.json())
}

export default deleteDeployment
