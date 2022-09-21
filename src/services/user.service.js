import {axiosService} from "./axios.service";

import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users, user),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),
    updateBYId:(id)=>axiosService.put(`${urls.users}/${id}`),
    deleteById:(id)=>axiosService.delete(`${urls.users}/${id}`)
}

export{
    userService
}