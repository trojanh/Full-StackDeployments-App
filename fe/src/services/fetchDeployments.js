function fetchDeployments() {
  return fetch(process.env.API_BASE_URL + '/deployments').then((data) =>
    data.json()
  )
}

export default fetchDeployments
