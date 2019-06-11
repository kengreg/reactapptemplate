import React from "react";
import header from "../images/dissidia.png";

class Navbar extends React.Component{
	render(){
		return(
			<div className="BadgeNew__hero">
					<div className="row">
						<div className="col-3">
						<img className="img-fluid" src={header} alt="logo"/>
						</div>
					</div>
			</div>
			)
	}
}

export default Navbar;