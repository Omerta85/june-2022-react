import {useDispatch} from "react-redux";

import {carsActions} from "../../store";

const Car = ({car}) => {

    const dispatch =useDispatch()

    const updateCar=()=>{
        dispatch(carsActions.setOnUpdate(car))
    }

    const deleteCar=()=>{
        dispatch(carsActions.deleteCar({id:car.id}))
    }

    return (
        <div style={{display:'flex', justifyContent:'space-evenly', border:'1px solid black', borderRadius:'5px', background:"blue",
        color:"yellow"}}>
            <p>model={car.model}</p>
            <p>price={car.price}</p>
            <p>year={car.year}</p>
            <button style={{borderRadius:'5px', background:"yellow",
                color:"blue"}} onClick={updateCar}>update</button>
            <button style={{borderRadius:'5px', background:"yellow",
                color:"blue"}} onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};