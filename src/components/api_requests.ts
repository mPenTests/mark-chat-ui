import axios from "axios";


type Login = {
    access: string,
    refresh: string
}

const url: string = "http://127.0.0.1:8000/api"


export async function login(username: string, password: string) {
    const response = await axios.post<Login>(url + "/login", {
        username: username,
        password: password
    })

    return response
    
}