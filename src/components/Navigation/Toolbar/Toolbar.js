import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const Toolbar=(props)=>(
    <header className={classes.Toolbar}>

        <SideDrawerToggle clicked={props.showSideDrawer}/>

        <div className={classes.Logo}>
         <Logo/>
        </div>
        
        <nav className={classes.DesktopOnly}>
          <NavigationItems/>
        </nav>

    </header>
)

export default Toolbar