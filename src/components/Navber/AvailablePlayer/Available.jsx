import React, { use } from 'react';
import Player from '../Player/Player';

const Available = ({playersPromise,setAvailableBalance,availableBalance,addPlayer,setAddPlayer}) => {
    const playerData=use (playersPromise);
    // console.log(playerData);
    
    
    return (
        <div className='max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
            {playerData.map(player=> <Player player={player} 
            availableBalance={availableBalance}
             setAvailableBalance={setAvailableBalance}
             addPlayer={addPlayer}
             setAddPlayer={setAddPlayer}
             ></Player>
     
            )}
        </div>
    );
};

export default Available;