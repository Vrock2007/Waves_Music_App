import React, {useState, useEffect} from 'react'
//Importing Styles
import "./styles/app.scss";
//Importing Components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
//Inporting Util
import data from './util'

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); 
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong} 
      />
      <Library songs={songs} setCurrentSong = {setCurrentSong} />
    </div>
  );
}

export default App; 
