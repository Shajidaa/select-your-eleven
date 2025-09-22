import React from 'react';
import logo from "../../../assets/logo.png";
const SelectedCard = ({player}) => {
    return (
      <>
      
           <div className='flex  items-center '>
               <div>
                <img src={logo} alt="" />
                </div>
             <div>
                <h2 className='text-xl font-bold'>{player.player_name}</h2>
                <p>Left -hand</p>
            </div>
            </div>
           <div><button className='btn'> delete</button></div>
     
      </>
    );
};

export default SelectedCard;