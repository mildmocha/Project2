import React from 'react'

import classes from "./Box.module.css"

export default function Box({text,Menu,link }){
    const styleMenu ={
      fontSize:"40px",
      fontWeight:"bold"
    }
    const styleBoard = {
      fontSize: "30px"
    }

return (
 <div className={classes.shadow}>
      <div className={classes.nemo}>
            {Menu ? ( <a href= "{link}"><span style={styleMenu} >{text}</span></a>)
            : (
                  <span style={styleBoard}>{text}</span>
            )}
</div>
</div>


)
}