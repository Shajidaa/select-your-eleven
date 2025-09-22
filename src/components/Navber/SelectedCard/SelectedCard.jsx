import React from 'react';

const SelectedCard = ({player,removeCard}) => {
    const removePlayer=()=>{
        removeCard(player)
    }
    return (
      <>
       <div className='flex justify-between  items-center '>
<div className='flex  items-center '>
               <div>
                <img className='w-10 h-10 rounded-full bg-cover border-2 border-orange-500   mr-2' src={player.player_image} alt="" />
                </div> 
             <div>
                <h2 className='text-xl font-bold'>{player.player_name}</h2>
                <p>Left -hand</p>
            </div>
            </div>
           <div onClick={removePlayer}><button className='btn'> delete</button></div>

       </div>
           
     
      </>
    );
};

export default SelectedCard;