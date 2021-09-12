import axios from "axios";

export const axiosInstance = axios.create({
    baseUrl : "https://trudovablog.herokuapp.com/api"
})
//going to seperate server