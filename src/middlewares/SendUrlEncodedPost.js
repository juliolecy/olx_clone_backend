
function sendPost(url, body, headers = undefined){
    return fetch(url, {
        method: 'POST',
        headers,
        body,
    })
}

module.exports = {   
    sendUrlEncodedPost:  (url, body, headers = {})=>{
       return sendPost(url, new URLSearchParams(body), headers)
    }
}