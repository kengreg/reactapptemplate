import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import logo from "../images/logo.jpg";
import header from "../images/badge-header.png";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component{
	state = { form: {
		// firstname: '',
		// lastname: '',
		// email: '',
		// jobtitle: 'Designer',
		// twitter: ''
	} };

	handleChange = e => {
		// const nextForm = this.state.form
		// nextForm[e.target.name] = e.target.value;
		this.setState({
			...this.state.form,
			[e.target.name]: e.target.value
		})
	}
	render(){
		return(
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<div className="row">
						<div className="col-3">
						<img className="img-fluid" src={header} alt="logo"/>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<Badge firstName="My name" lastName="mylastname" twitter="kengreg" jobtitle="programmer" img={logo} />
						</div>
						<div className="col-sm-6">
							<BadgeForm onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>	
				</div>
			</div>

			)
	}
}

export default BadgeNew;






