import {useEffect, useState} from "react";
import {getFlysAxious} from "./space.api.axious.service";
import Fly from "./Flys.css";

export default function Flys(){
    let [flys, setFlys] = useState([])


    useEffect(() => {
        getFlysAxious().then(value => setFlys(value.data))

    }, [])

    return(<div className={'flys'}>
        {flys.filter(value => value.launch_year !== '2020').map((fly, index) => <Fly item={fly} key={index}/>)}
    </div>)
}