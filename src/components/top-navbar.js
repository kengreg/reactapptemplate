import React from "react";
import {Link} from 'react-router-dom';

class TopNavbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Home</Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="submenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="submenu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/badges" className="nav-link">Badges</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/badges/new" className="nav-link">New Badge</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}


export default TopNavbar;