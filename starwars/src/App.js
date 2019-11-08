import React, {useState} from 'react';
import './App.css';
import Character from './components/Characters/Character'
import styled from 'styled-components';

const App = () => {
const [people, setPeople] = useState([])

  useEffect(() => {

    axios.get('https://swapi.co/api/people').then(response => {
      setPeople(response.data.results);
  

  });
},[]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  //  {people.map(character => Character name ={character.name})}
  );
}

export default App;
