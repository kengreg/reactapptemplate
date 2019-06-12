import React from "react";
import './styles/Badges.css';
import confLogo from '../images/dissidia.png';
import BadgesList from "../components/BadgesList";
import {Link} from 'react-router-dom';

class Badges extends React.Component{
    state = {
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
    }
    render(){
        return(
            <div>
                {/* <Navbar /> */}
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
                        {/* <ul className="list-unstyled">
                            {this.state.data.map((badge) => {
                                return(
                                    <li key={badge.id}>
                                        <p>{badge.firstName} {badge.lastName}</p>
                                    </li>
                                )
                                    
                            })}
                        </ul> */}
                    </div>
                </div>



            </div>

                

        )
    }
}

export default Badges;