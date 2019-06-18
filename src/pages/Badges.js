import React from "react";
import './styles/Badges.css';
import confLogo from '../images/dissidia.png';
import BadgesList from "../components/BadgesList";
import Loader from "../components/Loader";
import {Link} from 'react-router-dom';

class Badges extends React.Component{
    //the constructor need props to init the super(), so write down props wwwwww
    constructor(props){
        super(props);
        //the states need to be here in the constructor, you cant put just "state" you need to put "this.state", if not then it will not pass the info to the render.
        this.state = {
            //we should put two more states which are loading and error
            loading:true,
            error:null,
            data:[]
        }
        console.log('1. constructor()')
    }


    componentDidMount(){

        this.fetchCharacters()
        console.log('3.didmount ()')

    }

    fetchCharacters = async () => {
        //first we put the loading before the request
        this.setState({loading: true, error: null});
        //then we try to get the data
        try{
            const response = await fetch('https://www.moogleapi.com/api/v1/characters');
            const data = await response.json();
            this.setState({
                //when we finish to get the data we need to remove the loading
                loading:false,
                data: data
            });
        } catch(error){
            this.setState({
                //when we finish to get the data we need to remove the loading
                loading:false,
                error: error
            });
        }

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
        if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }

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

                {this.state.loading && (
                    <div className="Loader">
                        <Loader />
                    </div>
                )}

                {/* to show button when there is NO loading */}
                {!this.state.loading &&(
                    <button onClick={() => this.fetchCharacters()}>Load More</button>
                )};



            </React.Fragment>

                

        )
    }
}

export default Badges;