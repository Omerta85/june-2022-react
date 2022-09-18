import axios from "axios";
let axiousInfo =  axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
})


const getFlysAxious = () => {
    return axiousInfo.get()
}

const getFlyAxious = (n) => {
    return axiousInfo.get(n)

}
export {getFlyAxious, getFlysAxious}