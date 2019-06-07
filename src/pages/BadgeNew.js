import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import logo from "../images/avatar.jpg";
import header from "../images/dissidia.png";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component{
	state = { form: {
		firstname: '',
		lastname: '',
		email: '',
		jobtitle: '',
		twitter: ''
	} };

	handleChange = e => {
		this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			}
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
							<Badge 
							firstname={this.state.form.firstname} 
							lastname={this.state.form.lastname}
							twitter={this.state.form.twitter}
							jobtitle={this.state.form.jobtitle}
							email={this.state.form.email}
							img={logo} />
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