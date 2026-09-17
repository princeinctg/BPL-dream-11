import { Suspense,  useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Players from "./components/Players/Players";
import type { Iplayer } from "./types/player";

const playersFech = async (): Promise<Iplayer[]> => {
  const res = await fetch('/data.json');
  return res.json();
};

function App() {
    const playerPromise = playersFech();
     const [coin, setCoin] = useState (5000)
  return (
    <>
      <Nav coin ={coin} />

      <Suspense
        fallback={
          <div className="flex min-h-[70vh] items-center justify-center">
            <h2 className="text-2xl font-bold">Loading...</h2>
          </div>
        }
      >
        <Banner />

        <Players playerPromise={playerPromise} coin ={coin}  setCoin = { setCoin} />
      </Suspense>
    </>
  );
}

export default App;