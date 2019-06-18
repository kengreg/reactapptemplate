import React from 'react';
import './styles/BadgeList-badges.css';


class BadgesList extends React.Component{
    render() {
        return(
            <ul className='list-unstyled Badge__list row'>
                {this.props.badges.map(badge => {
                    return(
                        <li key={badge.id} className="col-xs-12 col-md-6 col-lg-4">
                         <figure className="Badge__box d-flex">
                             <div className="Badge__figure-img">
                                <img src={badge.picture} className="rounded-circle img-fluid" alt="{badge.name}"/>
                             </div>
                             <figcaption className="Badge__figure-caption">
                                 <h4 className="font-weight-bold">{badge.Name}</h4>
                                 <dl className="Badge__user-details row">
                                     <dt className="col-4"><strong>Job:</strong></dt>
                                     <dd className="col-8">{badge.job}</dd>
                                     <dt className="col-4"><strong>Game:</strong></dt>
                                     <dd className="col-8">{badge.origin}</dd>
                                 </dl>
                             </figcaption>
                         </figure>
                        </li>
                    );
                })}
            </ul>
        )
    }
}


export default BadgesList;