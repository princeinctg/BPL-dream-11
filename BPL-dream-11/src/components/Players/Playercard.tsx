import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
   selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const Playercard = ({ player, coin, setCoin , selectedPlayers, setSelectedPlayers}: IPlayerCardProps) => {

  const [isSelected, setIsSelected] = useState(false);

const handleSelectedPlayer = () => {
  const newCoinPrice = coin - player.price;

  if (newCoinPrice >= 0) {
    setIsSelected(true);
    
    setCoin(newCoinPrice);
   
    
    toast.success(`${player.playerName} is purchased successfully`);
  } else {
    toast.error("coin is low");
  }


 // selected players logic
   setSelectedPlayers([...selectedPlayers, player]);

};





  return (
    <div>
      <div className="card bg-base-100 shadow-sm ">
        <figure>
          <img
            src={player.playerImg}
            className="w-150 h-120 transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="card-body space-y-3">

          <h2 className="card-title">
            <FaUser /> {player.playerName}
          </h2>

          <div className="divider" />

          <h2 className="font-semibold">Rating</h2>

          <div className="flex justify-between gap-4">
            <p className="font-semibold">{player.battingStyle}</p>
            <button>{player.bowlingStyle}</button>
          </div>

          <div className="card-actions justify-between items-center">
            <h2 className="font-bold text-2xl">${player.price}</h2>

            <button
              onClick={handleSelectedPlayer}
              className="btn"
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Playercard;