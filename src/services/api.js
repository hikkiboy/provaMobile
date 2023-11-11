import axios from "axios";

//json-server –watch -d 180 –host SEU-IP db.json

const api = axios.create({
    baseURL: 'http://192.168.0.20:3000/'
})

export default api