import React from 'react';
import "./FAQ.css"
import { Slider } from '../../Components/Slider/Slider';

const FAQ = () => {
    return (
        <div className="FAQ">
            <div className="FAQ-wrapper">
              <div className="FAQ-Block" id='block'>
                <h1 className="FAQ-Title">How does our <span>NFT</span> lottery work?</h1>
                <p><span>When releasing our collection of NFT lottery tickets, we use standard NFT mint tools.</span><br /><br /> When issuing NFT tickets, you may come across a completely random lottery ticket, which may contain different winnings. Also, you can always count the number of NFT tickets in the collection using the block explorer. Winnings are generated automatically within 8 hours after the release of the NFT to the wallet that produced the mint of the NFT ticket.</p>
              </div>
              <div className="FAQ-Block" id='block'>
                <h1 className="FAQ-Title">How and when is the prize paid out?</h1>
                <p><span>The number of NFT tickets in the collection using the block explorer.</span><br /><br />We make winnings automatically within 8 hours after the release of NFT to the wallet that produced the NFT mint.</p>
              </div>
              <div className="FAQ-Block" id='block'>
                <h1 className="FAQ-Title">Who can participate?</h1>
                <p><span>When releasing our collection of NFT lottery tickets, we use standard NFT mint tools.</span><br /><br />When issuing NFT tickets, you may come across a completely random lottery ticket, which may contain different winnings. Also, you can always count the number of NFT tickets in the collection using the block explorer. Winnings are generated automatically within 8 hours after the release of the NFT to the wallet that produced the mint of the NFT ticket.</p>
              </div>
              <div className="FAQ-Block" id='block'>
                <h1 className="FAQ-Title">How are the winnings distributed?</h1>
                <p><span>Example</span><br />The number of NFT tickets is 1000 at a price of 0.1 Solana for one = 100 Solana. Empty NFT = 820 pieces. <br /><span>NFT with winnings:</span><br />100 NFT x 0.2 Sol = 20 Sol <br />50 NFT x 0.5 Sol = 25 Sol <br />25 NFT x 1 Sol = 25 Sol <br />5 NFT x 3 Sol = 15 Sol <br />1 NFT x 5 Sol = 5 Sol <br /><br /><span>In total:</span> we give 90% of the bank back to the lottery participants and pay all commissions and issue NFT for our own money.</p>
              </div>
            </div>
            <div className="FAQ-Block_last">
              <h1 className="FAQ-Title">What are <span>NFT</span> tickets and how many are there?</h1>
              <Slider />
            </div>
        </div>
      );
}
 
export {FAQ};