import React from 'react'

import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

let INGREDIENT_PRICE={
                      salad:20,
                      bacon:40,
                      cheese:10,
                      meat:50,
                     }

class BurgerBuilder extends React.Component{
    state={
           ingredients:{
                        salad:0,
                        bacon:0,
                        cheese:0,
                        meat:0,
                       },
            totalPrice:100,
            purchasable:false,
            dispSummary:false
          }
    
    DisplaySummary=()=>{
      this.setState({dispSummary:true})
    }
    
    purchaseCancelled=()=>{
      this.setState({dispSummary:false})
    }

    purchaseContinue=()=>{
      alert('Order Received ! ')
    }

    UpdatePurchasable=(ingredients)=>{
      const sum = Object.keys(ingredients)      //['salad','meat',...]
                                .map(ingr=>{    //eg [1 ,2, 0, 4]
                                  return ingredients[ingr]
                                })
                                .reduce( (sm,el)=>{ return sm + el}, 0 ) //0 is initial valu => goes to loop and result will be a no in single element array eg: [7]
      //now sum is the no.of ingredients
      this.setState( { purchasable: sum > 0 } ) // true / false
    }
          
    AddIngredient=(type)=>{
     const count=this.state.ingredients[type] + 1
     const ingr= {...this.state.ingredients}
     ingr[type]=count

     const NewPrice = this.state.totalPrice + INGREDIENT_PRICE[type]

     this.setState( {ingredients:ingr, totalPrice: NewPrice} )

     this.UpdatePurchasable(ingr)
    }      

    RemoveIngredient=(type)=>{
       if(this.state.ingredients[type]<=0)
         {  
             return    
         }
       const count=this.state.ingredients[type] - 1
       const ingr= {...this.state.ingredients}
       ingr[type]=count
       
       const NewPrice = this.state.totalPrice - INGREDIENT_PRICE[type]

       this.setState( {ingredients:ingr, totalPrice: NewPrice} )
       
       this.UpdatePurchasable(ingr)
    }

    render(){
      
        const disabledInfo={...this.state.ingredients}
        for(let key in disabledInfo)                  //to loop through all the keys in disabledInfo
          disabledInfo[key]= disabledInfo[key] <= 0   //returns true if value less han or = 0 else false
        //result eg: {salad:tue,meat:false,bacon:false,cheese:true}

        return(
            <Aux>

               <Modal show={this.state.dispSummary} clicked={this.purchaseCancelled}>
                 <OrderSummary ingredients={this.state.ingredients} 
                               purchaseContinue={this.purchaseContinue}
                               purchaseCancelled={this.purchaseCancelled}
                               totalPrice={this.state.totalPrice}
                 />
               </Modal>
              
               <Burger ingredients={this.state.ingredients}/>
              
               <BuildControls AddIngr={this.AddIngredient} 
                              RemoveIngr={this.RemoveIngredient}
                              DisabledInfo={disabledInfo}
                              Price={this.state.totalPrice}
                              Count={this.state.ingredients}
                              Purchasable={this.state.purchasable}
                              DispSummary={this.DisplaySummary}
               />
            
            </Aux>
        )
    }
}
export default BurgerBuilder