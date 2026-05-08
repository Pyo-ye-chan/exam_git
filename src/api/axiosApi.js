import axios from 'axios';

export const maxios = axios.create({
    baseURL : `http://localhost`
});

// maxios.interceptors.request.use((config) => {
//     const token = sessionStorage.getItem("token");
//     console.log("인터셉터:"+token)
//     if(token){
//         config.headers["Authorization"] = `Bearer ${token}`
//     }
//     console.log(token);
//     return config;
// });