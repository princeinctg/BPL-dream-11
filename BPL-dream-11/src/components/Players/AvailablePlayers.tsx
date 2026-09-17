
import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import Playercard from "./Playercard";

interface IavailableProps{
  players : Iplayer[]
   coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({ players , coin , setCoin , selectedPlayers,setSelectedPlayers }: IavailableProps) => {
  console.log(players , coin, setCoin);

  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {
      
      players.map((player : Iplayer , ind: number) => {
        return (
           <Playercard key={ind} player={player} coin= {coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setSelectedPlayers ={setSelectedPlayers}/>
        );
      })
      }
    </div>
  );
};

export default AvailablePlayers;