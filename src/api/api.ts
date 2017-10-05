import axios from 'axios'
import projectConfig from '../../project.config'
const baseURL = 'http://' + projectConfig['baseURL'] + ':5000/api'
//multipart/form-data
//application/json
//application/x-www-form-urlencoded
const defaultHeaders = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'    
    }
}
    
const postToBackend = (url: string, data: any = '', headers = defaultHeaders): Promise<any> => {
    const fullURL = baseURL + url
    return axios.post(fullURL, data, headers).then(function (response) {
        return response

    }).catch(function (error) {
        console.log(error)
        return error
    })
}

const getFromBackend = (url: string, data: any = '', headers = defaultHeaders): Promise<any> => {
    const fullURL = baseURL + url
    return axios.get(fullURL, headers).then(function (response) {
        return response

    }).catch(function (error) {
        console.log(error)
        return error
    })
}

export {
    postToBackend,
    getFromBackend
}
