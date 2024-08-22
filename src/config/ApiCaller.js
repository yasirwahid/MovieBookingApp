import Axios from 'axios';

const bearerToken = " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzFjN2JiZWRhOTNjZDQ2YTRmZmJkNWNkOTgzMzY3MiIsIm5iZiI6MTcyNDIzNTUxOS43NjczMTksInN1YiI6IjY2YzViZTUyN2EzMjFkZWFjY2FmNWNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpKAfQI0BtlZNpC9hQftPbMYovP2_3EuPbh1ovTRle8" //will come after authentication

export default class ApiCaller {
    static Get = (endPoint = '', customUrl = '', headers = {}, params = {}) => {
        return Axios.get(customUrl ? customUrl : endPoint, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                "Authorization": `Bearer ${bearerToken}`,
                ...headers
            },
            params
        })
            .then((res) => res)
            .catch((err) => err.response);
    };

    static Post = (endPoint = '', body = {}, headers = {}) => {
        return Axios.post(endPoint, body, {
            headers: { 'Content-Type': 'application/json', ...headers },
        })
            .then((res) => res)
            .catch((err) => err.response);
    };

    static Put = (endPoint = '', body = {}, headers = {}) => {
        return Axios.put(endPoint, body, {
            headers: { 'Content-Type': 'application/json', ...headers },
        })
            .then((res) => res)
            .catch((err) => err.response);
    };

    static Delete = (endPoint = '', body = {}, headers = {}) => {
        return Axios.delete(endPoint, {
            headers: { 'Content-Type': 'application/json', ...headers },
            data: body,
        })
            .then((res) => res)
            .catch((err) => err.response);
    };
}