function getRequest(location, callback) {
    fetch(location)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}
  
function postRequest(location, requestBody, callback) {
    fetch(location, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}
  
function deleteRequest(location, callback) {
    // stay tuned
}
  
function putRequest(location, requestBody, callback) {
    // stay tuned
}
  
export default {
    getRequest,
    postRequest,
    deleteRequest,
    putRequest
};