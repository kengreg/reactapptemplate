import React from "react";

//the components are class , so you need to create them using class and the name, then the class will extends to the React.component
class Badge extends React.Component{
	//all components need at least 1 method, the method is Render
	render(){
		return <article>
			<header>
				<img src="" alt="logo"/>
			</header>
			<div>
				<img src="" alt="avatar"/>
				<h1>My first app <br />using React</h1>
			</div>
			<div>
				<p>Frontend Enginner</p>
				<p>@twitter</p>
				<footer>
				<p>footer!!!</p>
				</footer>
			</div>
		</article>
	}

}

//to export a component from this file to other
export default Badge;