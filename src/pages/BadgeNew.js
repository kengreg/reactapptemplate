import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import logo from "../images/logo.jpg";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component{
	render(){
		return(
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="logo"/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<Badge firstName="My name" lastName="mylastname" twitter="kengreg" jobtitle="programmer" img={logo} />
						</div>
						<div className="col-sm-6">
							<BadgeForm />
						</div>
					</div>	
				</div>
			</div>

			)
	}
}

export default BadgeNew;