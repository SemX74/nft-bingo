import React from 'react';
import { List } from '../../Components/List/List';
import "./History.css"

const History = () => {
    return (
        <div className="History">
            <h1 className='Title'>ACTUAL TRANSACTIONS</h1>
            <List />
        </div>
      );
}
 
export {History};