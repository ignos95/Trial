import React, { useEffect } from 'react'
import Aux from "../../../hoc/Auxilary"
import Button from '../../UI/Button/Button'

const OrderSummary=(props)=>{
    
    useEffect(()=>{console.log('[use Effect]')})

    const ingrList=Object.keys(props.ingredients)
                            .map( ingr=> <li key={ingr}>
                                           <span style={{transform:'capitalize'}}>
                                               {ingr} 
                                           </span>
                                            : {props.ingredients[ingr]}
                                         </li>
                                )

    return(
        <Aux>
            <h3>Your Order Summary</h3>
            <ul>
              {ingrList}
            </ul>
            <p><strong>Total Price : ₹ {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btntype={'Danger'} clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btntype={'Success'} clicked={props.purchaseContinue}>Continue</Button> 
        </Aux>
    )
}

export default OrderSummary