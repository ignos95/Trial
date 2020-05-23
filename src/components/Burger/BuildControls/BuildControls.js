import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const items=[
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'}
]

const BurgerControls=(props)=>(
    <div className={classes.BuildControls}>

       <p>TOTAL PRICE : ₹ <strong>{props.Price.toFixed(2)}</strong></p>

       {
        items.map( itm=>(<BuildControl key={itm.label} 
                                       label={itm.label}
                                       Count={props.Count[itm.type]} 
                                       Add={ ()=>{props.AddIngr(itm.type)} }
                                       Remove={ ()=>{props.RemoveIngr(itm.type)} }
                                       DisabledInfo={props.DisabledInfo[itm.type]}
                         />) )
       }
       <button className={classes.OrderButton} disabled={!props.Purchasable} onClick={props.DispSummary}>ORDER NOW</button>
    </div>
)

export default BurgerControls