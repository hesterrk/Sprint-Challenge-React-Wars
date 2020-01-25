import React from 'react';
import './App.css';
import CharacterContainer from './components/Characters/CharacterContainer';
// import Character from './components/Characters/Character';


const App = () => {


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterContainer />
      {/* <Character/> */}
    
    </div>
  
  );
}

export default App;
