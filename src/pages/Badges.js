import React from "react";
import './styles/Badges.css';
import confLogo from '../images/dissidia.png';
import BadgesList from "../components/BadgesList";
import {Link} from 'react-router-dom';

class Badges extends React.Component{
    //the constructor need props to init the super(), so write down props wwwwww
    constructor(props){
        super(props);
        //the states need to be here in the constructor, you cant put just "state" you need to put "this.state", if not then it will not pass the info to the render.
        this.state = {
            data:[]
        }
        console.log('1. constructor()')
    }
    componentDidMount(){
        console.log('3.didmount ()')
        //Here we put a set time of 3 seg to start the function where will update the "this.state" with a new information from an API or any file.
        setTimeout(() => {
            //to avoid the error of a function working while we went to other page so the component doesnt exist, we need to use the "timeoutId" to make a clearTimeout using the id
            //Fixing 1> first we save the set time or function which need to start in a constant inside of this. so this.timeoutId
                this.timeoutId = setTimeout(() => {

                        this.setState({
                            data:[
                                {
                                    "id": "id01",
                                    "firstName": "Warrior of Light",
                                    "lastName": "None",
                                    "serie": "Final Fantasy I",
                                    "jobTitle": "warrior",
                                    "twitter": "@twitteando",
                                    "avatarUrl": "https://cache.sqex-bridge.jp/img/oPG2NHftm"
                                },
                                {
                                    "id": "id02",
                                    "firstName": "Cloud",
                                    "lastName": "Strife",
                                    "serie": "Final Fantasy VII",
                                    "jobTitle": "Soldier",
                                    "twitter": "@twitteando",
                                    "avatarUrl": "https://cache.sqex-bridge.jp/img/oPGsN7kqxJ"
                                },
                                {
                                    "id": "id03",
                                    "firstName": "Onion",
                                    "lastName": "Knight",
                                    "serie": "Final Fantasy III",
                                    "jobTitle": "light warrior??",
                                    "twitter": "@twitteando",
                                    "avatarUrl": "https://cache.sqex-bridge.jp/img/oPGdNre4M"
                                }
                            ]
                        })
                }, 3000)

    });
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("5.componenDidUpdate()")
        console.log({
            prevProps: prevProps, prevState: prevState
        })
        console.log({
            props:this.props,
            state: this.state
        })
    }
    componentWillUnmount (){
        console.log("6.willUnmount")
        //Fixing > 2 Then we use the constant id in the clear time
        clearTimeout(this.timeoutId)
    }

    render(){
        console.log('2.render ()')
        return(
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>



            </React.Fragment>

                

        )
    }
}

export default Badges;