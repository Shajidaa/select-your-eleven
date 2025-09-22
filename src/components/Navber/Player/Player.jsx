import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Player = ({player,setAvailableBalance,availableBalance,addPlayer,setAddPlayer}) => {
    const [isSelected,setIsSelected]=useState(false)
   
   
   
    const handleSelected=(playerData)=>{
      const playerPrice=parseInt(playerData.price.split('Cr').join('').split('৳').join(''));
      if (availableBalance<playerPrice) {
        return toast(`Not enough coins`)
      }if (addPlayer.length ===6) {
        return toast(`already add 6 players`)
      }
      
     

        setIsSelected(true),
            toast(`You've selected ${player.player_name}`)
    setAvailableBalance(availableBalance-playerPrice);
    setAddPlayer([...addPlayer,playerData])

    }
    return (
              <div className="card p-3 lg:p-5 rounded-2xl max-w-96 shadow-sm">
         <figure>
    <img className='w-[368px]  h-[320px] object-cover '
      src={player.player_image}
      alt="Player name" />
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