import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
//the components are class , so you need to create them using class and the name, then the class will extends to the React.component
class BadgeForm extends React.Component{
	//all components need at least 1 method, the method is Render
	render(){

		return (
				<div>
					<h1>New bagdes</h1>
					<form>
						<div className="form-group">
							<label>First Name</label>
							<input className="form-control" type="text" name="firstname"/>
						</div>
						<button className="btn btn-primary">Save</button>
					</form>
				</div>
			)
	}

}

//to export a component from this file to other
export default BadgeForm;