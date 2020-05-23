import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const Burger = (props) =>{ 

  let ingr=Object.keys(props.ingredients)
                     .map(
                          (ingKey)=>{ 
                                     return [ ...Array(props.ingredients[ingKey]) ].map(
                                                                                        (_,i)=>{
                                                                                                return <BurgerIngredient key={ingKey+i} type={ingKey}/>
                                                                                               }
                                                                                       ) 
                                    } 
                         )
                        
console.log(ingr)

 ingr=ingr.reduce((arr,elem)=>{ return arr.concat(elem) },[])
 if(ingr.length===0){
                     ingr=<p>Please start adding Ingredients!</p>
                    }

 return <div className={classes.Burger}>
          <BurgerIngredient type='bread-top'/>
          {ingr}
          <BurgerIngredient type='bread-bottom'/>
        </div>
}
export default Burger