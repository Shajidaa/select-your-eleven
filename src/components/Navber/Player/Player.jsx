import React, { useState } from 'react';

const Player = ({player,setAvailableBalance,availableBalance,addPlayer,setAddPlayer}) => {
    const [isSelected,setIsSelected]=useState(false)
   
   
   
    const handleSelected=(playerData)=>{
      const playerPrice=parseInt(playerData.price.split('Cr').join('').split('৳').join(''));
      if (availableBalance<playerPrice) {
        return alert(`Not enough coins`)
      }if (addPlayer.length ===6) {
        return alert(`already add 6 players`)
      }
      
     
      
        setIsSelected(true),
    setAvailableBalance(availableBalance-playerPrice);
    setAddPlayer([...addPlayer,playerData])

    }
    return (
              <div className="card p-2 rounded-2xl w-96 shadow-sm">
         <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
     </figure>
     <div className="card-body">
      <h2 className="card-title"> <span>{player.player_name}</span></h2>
      <div className='flex justify-between items-center  border-b border-b-gray-400 mb-2'>
        <p>Bangladesh</p>
        <button className='btn '>All-Rounder</button>
      </div>
      <h3>Rating</h3>
      <div className='flex justify-between items-center'> 
        <h4 className='text-black'>Left-Hand-Bat</h4>
        <h4 className='text-gray-500'>Left-Hand-Bat</h4>
      </div>
      <div  className="card-actions flex justify-between items-center  ">
        <p>Price: {player.price}</p>
       <button disabled={isSelected} className="btn "
         onClick={()=>{handleSelected(player)} }> {isSelected===true?'Selected':'Choose Player'} </button>
      </div>
    </div>
    </div>
    );
};

export default Player;