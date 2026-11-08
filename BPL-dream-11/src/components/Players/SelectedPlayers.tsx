
import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import SelectedPlayerCard from "./selectedPlayerCard";

interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {

  if (selectedPlayers.length === 0) {
    return (
      <h2 className="font-bold text-3xl my-10 text-center text-red-500">
        No Selected Players
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 mt-6">
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard
          key={player.playerName}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;
