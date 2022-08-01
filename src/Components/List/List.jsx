import React from 'react';
import { ReactComponent as Info} from "../../Misc/Home/info.svg"
import './List.css'
const List = () => {
    let filledArray = [...new Array(6)].map(() => 'data');
    return (
        <ul className='Home-list'>
        <div className='Home-list_info'>
            <p>NFT ID ▾</p>
            <p>Mint Time▾</p>
            <p>Owner▾</p>
            <p>Win Amount▾</p>
        </div>
        {filledArray.map((item,id) =>
        <li className='Home-list_single' key={id}>
            <p>{item}</p>
            <p>{item}</p>
            <p>{item}</p>
            <p>{item}</p>
            <a href="" className='Home-list_single_detales'>detales</a>
            <Info/>
        </li>
        )}
      </ul>
      );
}
 
export {List};