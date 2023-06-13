import { useNavigate } from "react-router-dom";
import classes from "./Back.module.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

export default function Back({ A }) {
  const naviBack = useNavigate();
  const onBack = () => {
    naviBack(-1);
  };
  const style1 = { right: " 0 ", top: "15px" };
  const style2 = { left: "0", bottom: "8px", width: "70px" , filter:"none"};
  return (
    <>
      {A ? (
        <button
          onClick={onBack}
          className={classes.Back}
          style={style2}
        ></button>
      ) : (
        <button
          onClick={onBack}
          className={classes.Back}
          style={style1}
        ></button>
      )}
    </>
  );
}
