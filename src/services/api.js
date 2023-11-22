import axios from "axios";


const api = axios.create({
    baseURL: 'http://192.168.93.217:3000/'
})

export default api