import axios from 'axios'
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://reqres.in/api/users?page=2',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}