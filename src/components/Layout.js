import React from "react";
import TopNavbar from "./top-navbar";
import BottomFooter from "./bottomFooter";



function Layout(props){
    // const children = props.children;
    // return 'Layout';
    //below code can give us and test that actualy the layout is giving us the props given
    return (
        //React.Fragment will allow you to make a group of elements in one element without using a div 
        <React.Fragment>
            <TopNavbar />
            {props.children}
            <BottomFooter />
        </React.Fragment>
        );
}

export default Layout;