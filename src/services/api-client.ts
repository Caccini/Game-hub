import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { 
        key: '33bd78173f0e40d7b45c566aa089abb7'
    }
})

