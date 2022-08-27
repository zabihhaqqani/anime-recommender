import { useState } from "react";
import "./styles.css";

// importing images
import aot from "./aot.jpg";
import assassin from "./assassin.jpg";
import mha from "./mha.jpg";
import demon from "./demon.jpg";
import jujutsu from "./jujutsu.jpg";
import devil from "./devil.jpg";
import vamp from "./vamp.jpg";
import erased from "./erased.jpg";
import death from "./death.jpg";

//Database
const animeList = {
  Action: [
    {
      name: "My Hero Academia",
      IMDb: "IMDb : 8.4 / 10 ",
      imgURl: mha
    },
    {
      name: "Demon Slayer",
      IMDb: "IMDb : 8.7 / 10 ",
      imgURl: demon
    },
    {
      name: "Jujutsu Kaisen",
      IMDb: "IMDb : 8.7 / 10",
      imgURl: jujutsu
    }
  ],
  Comedy: [
    {
      name: "Assassination Classroom",
      IMDb: "IMDb : 8 / 10",
      imgURl: assassin
    },
    {
      name: "Devil is a Part Timer",
      IMDb: "IMDb : 7.7 / 10 ",
      imgURl: devil
    },
    {
      name: "The Vampire Dies in no Time",
      IMDb: "IMDb : 6.7 / 10",
      imgURl: vamp
    }
  ],
  Suspense: [
    {
      name: "Attack on Titan",
      IMDb: "IMDb : 9/10",
      imgURl: aot
    },
    {
      name: "Death Note",
      IMDb: "IMDb : 9/10",
      imgURl: death
    },
    {
      name: "Erased",
      IMDb: "IMDb : 8.5/10",
      imgURl: erased
    }
  ],
  MyList: [
    {
      name: "Attack on Titan",
      IMDb: "10/10",
      imgURl: aot
    },
    {
      name: "Assassination Classroom",
      IMDb: "9/10",
      imgURl: assassin
    },
    {
      name: "My Hero Academia",
      IMDb: "9/10",
      imgURl: mha
    }
  ]
};

export default function App() {
  let [animes, setanimes] = useState("Action");

  // click handler
  function clickHandler(anime) {
    setanimes(anime);
  }

  return (
    <div className="App">
      <h1>Anime Recommendation</h1>

      <div className="anime">
        {/* converting object animelist to array for displaying */}
        {Object.keys(animeList).map((anime) => (
          <span className="animeName" onClick={() => clickHandler(anime)}>
            {" "}
            {anime}
          </span>
        ))}
      </div>
      {/* displaying name and rating */}
      <main>
        {animeList[animes].map((list) => (
          <span key={list.name}>
            {" "}
            <span className="flex">
              {" "}
              <img className="image" src={list.imgURl} alt="img" />
              <span className="arrange"> {list.name} </span>
              <span className="arrange"> {list.IMDb} </span>{" "}
            </span>
          </span>
        ))}
      </main>
      <footer>Made with React by Zabih</footer>
    </div>
  );
}
