import { useNavigate } from "react-router-dom";
import classes from "./Back.module.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

export default function Back(){
    const naviBack = useNavigate()
    const onBack = () => {
        naviBack (-1);
    }


return (
    <>
    <button onClick={onBack} className={classes.Back}>
</button>
    </>
)
};