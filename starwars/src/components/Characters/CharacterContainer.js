import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';


const CharacterContainer = () => {

    //initialising the state with an empty array as our data takes this form
    const [people, setPeople] = useState([]);


    useEffect(() => {

        axios.get('https://swapi.co/api/people').then(res => {
            console.log(res.data.results);
            //setting our state setter to the data 
          setPeople(res.data.results);

      
    
      })
      .catch(err => {
          console.log(err);
      })
     
      
    },[]);



return ( 
<div className= "CharacterContainer"> 
{people.map((people,index) =>  <Character key = {index} name = {people.name} birth_year = {people.birth_year} gender = {people.gender} eye_color={people.eye_color} mass={people.mass} height={people.height}/> )} 
</div>)

}





export default CharacterContainer 
