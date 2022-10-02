import {axiosService} from "./axios.service";
import {urls} from '../configs'

const carService = {
    getAll:(page=1)=>axiosService.get(urls.cars, {params:{page}}),
    create:(car)=>axiosService.post(urls.cars, car),
    addPhotoById:(id,data)=>axiosService.patch(`${urls.cars}/${id}`, data),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateById:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}
export{
    carService
}