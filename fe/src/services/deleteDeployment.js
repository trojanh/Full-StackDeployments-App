function deleteDeployment(id) {
  return fetch(process.env.API_BASE_URL + '/deployments/' + id, {
    method: 'DELETE'
  }).then((resp) => resp.json())
}

export default deleteDeployment
