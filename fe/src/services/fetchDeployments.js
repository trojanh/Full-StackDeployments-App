function fetchDeployments() {
  return fetch(process.env.REACT_APP_API_BASE_URL + '/deployments').then((data) =>
    data.json()
  )
}

export default fetchDeployments
