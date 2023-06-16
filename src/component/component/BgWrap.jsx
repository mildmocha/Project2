import { Children } from "react"
import Bg from "../img/BGIMG.jpg"
import classes from "./BgWrap.module.css"
const BgWrap = ({children}) => {
    return(
        <>
        <div className={classes.BgWrap}>
            {children}
        </div>
        </>
    )
}
export default BgWrap;