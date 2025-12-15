import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TrafficLight = () => {
  const [ color, setColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(()=>{
      setColor((prevColor) => {
        if (prevColor === "red") return "yellow";
        if (prevColor === "yellow") return "green";
        return "red";
      });   
    },5000);
    return () => clearInterval(interval); 
  },[]);

    return  (<div className="semaforo">
        <div className=" text-center" style={{width: "80px", height: "220px", background: "black"}}>
        
        <button onClick={()=>setColor("red")} className={`red` + (color === "red" ? " iluminado" : "" )}></button>
        <button onClick={()=>setColor("yellow")} className={`yellow` + (color === "yellow" ? " iluminado" : "" )}></button>
        <button onClick={()=>setColor("green")} className={`green` + (color === "green" ? " iluminado" : "" )}></button>
      </div>
      </div>
      
  );
  };
//<button onClick={()=>}>Click me!</button>
export default TrafficLight;