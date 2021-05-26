import React from 'react'
//Importing Styles
import "./styles/app.scss";
//Importing Components
import Player from './components/Player'
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
