import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="About">
      <h1 className="Title">WHO ARE WE?</h1>
      <p className='About-info'>When creating our lottery, we emphasized transparency and honesty. Blockchain allows anyone to see every movement of our NFT tickets, as well as payouts for them. And what is important - you can see exactly how many NFTs were won and the payouts of winnings. To do this, we provide you with all the confirmations from the solscan block explorer.</p>
      <form className='Form' action=''>
        <h1 className="Title">LEAVE A REQUEST RIGHT NOW</h1>
        <div className="inputs-wrapper">
          <label className='Form-label' htmlFor="">Name</label>
          <input placeholder='How to address you?' className='Form-input' type="text" />
          <label className='Form-label' htmlFor="">E-mail</label>
          <input placeholder='example@gmail.com' className='Form-input' type="text" />
          <label className='Form-label' htmlFor="">Message</label>
          <textarea placeholder='Hello, I want to know...' className='Form-message Form-input' name="" id="" cols="30" rows="10"></textarea>
          <button className='play_button button'>SEND</button>
        </div>
      </form>
    </div>
    );
}
 
export {About};