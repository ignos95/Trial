import React from 'react'

import classes from "./BuildControl.module.css";

const BuildControl=(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>

        <button className={classes.Less} 
                onClick={ props.Remove } 
                disabled={props.DisabledInfo}>
         Less
        </button>
        
        <div className={classes.Count}>{props.Count}</div>

        <button className={classes.More} 
                onClick={ props.Add }>
         More
        </button>
    </div>
)

export default BuildControl