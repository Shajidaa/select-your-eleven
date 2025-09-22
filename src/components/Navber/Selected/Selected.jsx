import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const Selected = ({addPlayer,removeCard}) => {
    // console.log(addPlayer);
    
    return (
       <>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
{addPlayer.map(player=><SelectedCard removeCard={removeCard} player={player}></SelectedCard>)}
        </div>
       
       </>
    );
};

export default Selected;