import React from "react";

import "./styles/Badge.css";
// import confLogo from "../images/badge-header.svg";
//the components are class , so you need to create them using class and the name, then the class will extends to the React.component
class BadgeForm extends React.Component{
	//as soon as you use this.state or other you need to initializate the state. You can do it using an empty object
	//as in any programming language you must put the variables in empty first before use them.
	 state = {
		// firstname: '',
		// lastname: '',
		// email: '',
		// jobtitle: 'Designer',
		// twitter: ''
	};
	//all components need at least 1 method, the method is Render
	/*handleChange = (e) => {
		// console.log({
		// 	name: e.target.name,
		// 	value: e.target.value
		// });
		this.setState({
			// firstname: e.target.value
			[e.target.name]:e.target.value
		});

	};*/
	handleClick = (e) => {
		console.log("Button was clicked");
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form was submitted");
		console.log(this.state);
	};

	render(){

		return (
				<div>
					<h1>New bagdes</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>First Name</label>
							<input 
							onChange={this.props.onChange} 
							className="form-control" 
							type="text" 
							name="firstname"
							value = {this.state.firstname}
							/>
						</div>
						<div className="form-group">
							<label>Last Name</label>
							<input 
							onChange={this.props.onChange} 
							className="form-control" 
							type="text" 
							name="lastname"
							value = {this.state.lastname}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input 
							onChange={this.props.onChange} 
							className="form-control" 
							type="email" 
							name="email"
							value = {this.state.email}
							/>
						</div>
						<div className="form-group">
							<label>Job Title</label>
							<input 
							onChange={this.props.onChange} 
							className="form-control" 
							type="text" 
							name="jobtitle"
							value = {this.state.jobtitle}
							/>
						</div>
						<div className="form-group">
							<label>Twitter</label>
							<input 
							onChange={this.props.onChange} 
							className="form-control" 
							type="text" 
							name="twitter"
							value = {this.state.twitter}
							/>
						</div>



						<button onClick={this.handleClick} className="btn btn-primary">Save</button>
					</form>
				</div>
			)
	}

}

//to export a component from this file to other
export default BadgeForm;



