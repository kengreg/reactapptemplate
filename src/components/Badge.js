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
				<img className="Badge__avatar" src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TH/en/999/HP0082-NPHP00069_00-AVADISSIDIA00019/1530784420000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="avatar"/>
				<h1>My first app <br />using React</h1>
			</div>
			<div className="Badge__section-info">
				<p>Frontend Enginner</p>
				<div>@twitter</div>
			</div>
			<footer className="Badge__footer">
			<p>footer!!!</p>
			</footer>
		</article>
	}

}

//to export a component from this file to other
export default Badge;