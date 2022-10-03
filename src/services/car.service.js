import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carsService = {
    getAll: (page=1) => axiosService.get(urls.cars, {params:{page}}),
    create: (car) => axiosService.post(urls.cars, car),
    addPhotoById: (id, data) => axiosService.patch(`${urls.cars}/${id}`, data),
    delById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateCar:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar)
}

export {
    carsService
}