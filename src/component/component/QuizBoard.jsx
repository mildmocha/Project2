import { children } from "react"

import classes from"./QuizBoard.module.css"
function QuizBoard ({children}){
    return (
        <>
        <div className={classes.QuizBoard}>
        {children}
        </div>
        </>
    )
}

export default QuizBoard