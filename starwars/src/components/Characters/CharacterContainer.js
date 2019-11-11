import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';


const CharacterContainer = () => {

    const [people, setPeople] = useState([]);


    useEffect(() => {

        axios.get('https://swapi.co/api/people').then(res => {
            console.log(res.data.results);
          setPeople(res.data.results);

      
    
      })
      .catch(err => {
          console.log(err);
      })
     
      
    },[]);



return ( 
<div className= "CharacterContainer"> 
{people.map((people,index) =>  <Character key = {index} name = {people.name} birth_year = {people.birth_year} gender = {people.gender} /> )} 
</div>)

}





export default CharacterContainer 
