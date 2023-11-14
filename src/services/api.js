import axios from "axios";

//json-server –watch -d 180 –host SEU-IP db.json

const api = axios.create({
    baseURL: 'http://192.168.43.79:3000/'
})

export default api