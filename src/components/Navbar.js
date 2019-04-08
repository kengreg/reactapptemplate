import React from "react";
import logo from "../images/logo.jpg";
import "./styles/Navbar.css";

class Navbar extends React.Component{
	render(){
		return(
			<div className="Navbar">
			<div className="container-fluid">
				<a className="Navbar__brand" href="/">
						<img src={logo} className="rounded-circle Navbar__brand-logo" alt="logo"/>
					<span className="font-weight-light">Hello web</span>
					<span className="font-weight-bold">confirmation</span>
				</a>
				</div>
			</div>

			)
	}
}

export default Navbar;