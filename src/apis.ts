import axios from 'axios';

const URL = "http://localhost:8000"

interface IInfo {
    username: string;
    password: string;
}

export function login(userInfo: IInfo){
    return axios.post(`${URL}/auth/`, userInfo).then(res => res.data);

    return fetch(`${URL}/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }).then(res => res.json())
}