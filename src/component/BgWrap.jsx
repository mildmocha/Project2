import { Children } from "react"
import Bg from "../img/BGIMG.jpg"
import classes from "./BgWrap.module.css"
function BgWrap ({Children}) {
    return(
        <>
        <div className={classes.BgWrap}>
            {Children}
        </div>
        </>
    )
}
export default BgWrap;