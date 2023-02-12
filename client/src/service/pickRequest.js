import axios from "axios"

const url = "http://localhost:80";

export const pickRequest = async (params) => {
    try {
        console.log(params)
        const response = await axios.post(`${url}/user/request`, params);
        return response;
    } catch (error) {
        alert(error.message);
    }
}