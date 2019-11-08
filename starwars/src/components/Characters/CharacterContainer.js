import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';


const CharacterContainer = () => {

    const [people, setPeople] = useState([]);


    useEffect(() => {

        axios.get('https://swapi.co/api/people').then(res => {
          setPeople(res.data.results);
      
    
      });
     
      
    },[]);



return (
<div className= "CharacterContainer"> 

{people.map((character => {
    <Character name ={character.name} birth_year={character.birth_year}/>
    
)
})


}
</div>
);
}



export default CharacterContainer; 
