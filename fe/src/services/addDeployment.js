function addDeployment(inputData) {
  return fetch(process.env.REACT_APP_API_BASE_URL + '/deployments', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  })
    .then((resp) => resp.json())
}


export default addDeployment
