import React ,{useEffect, useState} from "react"
import classes from "./Timer.module.css"

const Timer = ({timeLimit, onTimeUp})=>{
   const [count,setCount] = useState(timeLimit);
    useEffect(()=>{
        const id = setInterval(()=>{
            setCount((count) => count-1);
        },1000)
        if(count ===0){
            clearInterval(id);
            onTimeUp();
       
        }
        return ()=> clearInterval(id);
    },[count,onTimeUp]);
   
    return(

        <div className={classes.Timer}>
            <span className={classes.Count}>
                {count}
            </span>S

        </div>
    )





}
export default Timer
