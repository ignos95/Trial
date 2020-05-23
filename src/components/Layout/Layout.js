import React from 'react'

import Aux from '../../hoc/Auxilary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

// <Toolbar> - for PC and mobile/tab
// <SideDrawer> - For Mobile/Tablet only
// <main> - Main contents including state

class Layout extends React.Component{
  
  state={
    showDrawer:false
  }

  BackdropCancelled=()=>{
    this.setState({showDrawer:false})
  }

  toggleSideDrawer=()=>{
    this.setState( (prevState)=>{
                                 return({showDrawer:!prevState.showDrawer})
                                } 
                 ) //this.setState({showDrawer:true}) can also be used

  }
  render(){
     return(
             <Aux>
                <Toolbar showSideDrawer={this.toggleSideDrawer}/>   
                <SideDrawer show={this.state.showDrawer} clicked={this.BackdropCancelled}/>
                <main 
                  className={classes.Content}
                >
                 {this.props.children}
                </main>
             </Aux>
           )
  }
}
    
export default Layout