import './App.css';
import A from "./components/A";
import {createContext, useEffect, useState} from "react";
import {Test} from "./Test"


// export let MyContext = createContext('defulat');
function App() {
    // let drill = 'some info';
    console.log('constructor');
  let [flag, setFlag] = useState(true);
  useEffect(()=>{
      console.log('componentDidMount');
      return()=>{
          console.log('componentWillUnmount')
      }
  }, [])
    useEffect(()=>{
        console.log("componentDidUpdate");
    }, [flag])
  return (
      <div>
          {/*два методи введення дріл і контекст*/}
          {/*app Component*/}
          {/*<MyContext.Provider value={'asdqwe'}>*/}
          {/*    <A drill={drill}/>*/}
          {/*</MyContext.Provider>*/}
          {/*{flag && <Test b={25}/>}*/}
          {console.log("render")}
          <button onClick={()=>setFlag(!flag)}>Hide</button>


      </div>);
}

export default App;
