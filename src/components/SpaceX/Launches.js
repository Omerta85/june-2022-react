import {useState, useEffect} from "react";
import axios from 'axios';
import Launch from "./Launch";
import "./Launches.css";

const baseUrl = 'https://api.spacexdata.com/v3/launches';

function Launches(){
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setLaunches(response.data);
        });
    },[]);
    // fetch('https://api.spacexdata.com/v3/launches')
    //     .then(response => response.json())
    //     .then(data => (
    //         setLaunches(data)
    //
    //     ));

    return(
        <div className={'styles'}>{
            launches.filter(value => value.launch_year !=='2020').map(((value=>(<Launch item={value} key ={value.id}/>))))
        }</div>
    );
}

export default Launches;