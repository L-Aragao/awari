const googleApi = 'https://google.com'

// const request = require('request')

// request(googleApi, {headers: {'user-agent': 'nodejs'}}, (err, res, body) => {
//     console.log(res)
// })

const axios = require('axios')

//IIFE
async(() => {
    const p1 = axios.get(googleApi).then(res =>  console.log(res))
    const p2 = axios.get(googleApi).then(res =>  console.log(res))
    const p3 = axios.get(googleApi).then(res =>  console.log(res))
    await Promise.all([p1, p2, p3])
})()