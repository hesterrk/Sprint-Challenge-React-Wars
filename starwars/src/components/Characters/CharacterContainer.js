import React from 'react';
import axios from 'axios';
import Character from './Character';


const CharacterContainer = () => {

    useEffect(() => {

        axios.get('https://swapi.co/api/people').then(res => {
          setPeople(res.data.results);
      
    
      });
    },[]);



return (
<div className= "CharacterContainer">
<Character />
<Character />

</div>

);

}

// {people.map(character => {
//     <Character name ={character.name} birth_year={character.birth_year/>)}


export default CharacterContainer; 
