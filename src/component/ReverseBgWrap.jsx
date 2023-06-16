import { Children } from "react"
import Bg from "../img/BGIMG.jpg"
import classes from "./ReverseBgWrap.module.css"
const ReverseBgWrap = ({children}) => {
    return(
        <>
        <div className={classes.ReverseBgWrap}>
            {children}
        </div>
        </>
    )
}
export default ReverseBgWrap;