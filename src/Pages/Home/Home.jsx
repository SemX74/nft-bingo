import React from 'react';
import { ReactComponent as Socail} from "../../Misc/Home/Guys.svg"
import { ReactComponent as MoneyUp} from "../../Misc/Home/MoneyUp.svg"
import { ReactComponent as Money} from "../../Misc/Home/Money.svg"
import { List } from '../../Components/List/List';
import "./Home.css"

const Home = () => {


  return (
    <div className="Home">
      <div className="Home-features_wrapper">
        <div className="Home-feature">
          <p><span> The first NFT lottery </span>built on the Solana blockchain</p>
          <Socail/>
        </div>
        <div className="Home-feature">
          <p><span>100% transparency!</span> You can see the output of each NFT and its payoff</p>
          <MoneyUp />
        </div>
        <div className="Home-feature">
          <p><span>90% of all money</span> is returned to lottery participants</p>
          <Money />
        </div>
      </div>

      <h1 className='Title'>TRY IT AND YOU WILL BE LUCKY!</h1>
      <div className="Home-lucky_screen"></div>
      <div className="Home-buttons_wrapper">
        <div className="Home-buttons-incdec_wrapper">
          <button className='incdec_button button'>-</button>
          <button className='incdec_button button'>+</button>
        </div>
        <div className="Home-button-play-wrapper">
          <button className="play_button button">Play</button>
        </div>
      </div>
    <List />
  </div>
    );
}
 
export {Home};