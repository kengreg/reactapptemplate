import React from "react";
import BgVideo from '../components/bgVideo';
import '../components/styles/homepage.css';
import GadgetThumb from "../components/GadgetThumb";
import Logo from "../images/dissidia.png";
import {Link} from "react-router-dom";
const VideoId = "KuJaAD2rvE4";


class HomePage extends React.Component{
    state = {
        data:[
            {
                "tid": "id01",
                "img": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/dissidia-final-fantasy-nt/b/bc/HowTOEasilyWinSummonBattles_Pic03.jpg?width=640ttps://www.novacrystallis.com/wp-content/uploads/2017/06/Dissidia-Final-Fantasy-NT-Basics-1-1024x576.jpg",
                "text": "召喚を呼べ！と一緒に戦う事できる！Battle using your favorites summons"
            },
            {
                "tid": "id02",
                "img": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/dissidia-final-fantasy-nt/6/64/StoryBattlesEnding_Pic01.jpg?width=640",
                "text": "Big fields where you can battle with your companions。仲間たちとチームを作ってたたえ！！！"
            },
            {
                "tid": "id03",
                "img": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/dissidia-final-fantasy-nt/2/2c/QuickLevelingGuide_Pic01.jpg?width=640",
                "text": "Get your badge here!!このサイトを本物じゃないけどどうですか？"
            }
        ]
    }
    render(){
        return(
            <React.Fragment>
                <section className="BadgeHome-Hero">
                    <header className="BadgeHome-HeroHeader">
                        <figure className="BadgeHome-Logo">
                            <img src={Logo} alt="Dissidia Arcade" className="img-fluid" />
                            <figcaption className="row">
                                <div className="BadgeHome-Logocaption col-sm-8 text-center">
                                    <h2>International Players</h2>
                                    <p>海外プレーヤー</p>
                                </div>
                                <div className="BadgeHome-captionLink col-sm-4">
                                    <Link to="https://www.facebook.com/Dissidia-FF-NTAC-International-News-and-more-1893498560965039/?ref=bookmarks" className="btn btn-action">START</Link>
                                </div>
                            </figcaption>
                        </figure>
                    </header>
                    <BgVideo VideoId={VideoId}/>
                </section>
                <section className="BadgeHome-content">
                    <article className="container">
                        <article className="BadgeHome-Gadgets">
                        <GadgetThumb gadget={this.state.data} />
                        </article>
                    </article>
                </section>


            </React.Fragment>

                

        )
    }
}

export default HomePage;