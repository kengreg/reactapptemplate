import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
//the components are class , so you need to create them using class and the name, then the class will extends to the React.component
class Badge extends React.Component{
	//all components need at least 1 method, the method is Render
	render(){



		return <article className="Badge">
			<header className="Badge__header">
				<img src={confLogo} alt="logo"/>
			</header>
			<div className="Badge__section-name">
				<img className="Badge__avatar" src={this.props.img} alt="avatar"/>
				<h1>{this.props.firstName}<br />{this.props.lastName}</h1>
			</div>
			<div className="Badge__section-info">
				<p>{this.props.jobtitle}</p>
				<div>@{this.props.twitter}</div>
			</div>
			<footer className="Badge__footer">
			<p>footer!!!</p>
			</footer>
		</article>
	}

}

//to export a component from this file to other
export default Badge;