import React from 'react';
import './styles/GadgetThumb.css';


class GadgetThumb extends React.Component{
    render() {
        return(
            <ul className='list-unstyled Gadget__list row'>
                {this.props.gadget.map(gadgets => {
                    return(
                        <li key={gadgets.tid} className="col-xs-12 col-md-6 col-lg-4 d-flex">
                            <article className="Gadget-item">
                                <div className="Gadget-frame">
                                    <div className="Gadget-box">
                                        <figure className="Gadget-img">
                                            <img src={gadgets.img} alt="img" className="img-fluid" />
                                        </figure>
                                        <div className="Gadget-text">
                                            <p>{gadgets.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ul>
        )
    }
}


export default GadgetThumb;