import React from 'react';
import  { styledCharacter } from './styledCharacter';

function Character(props) { 
    return (
        <styledCharacter>
        <div>
            <p>Name: {props.name}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p> Gender: {props.gender} </p>

        </div>
        </styledCharacter>
    );
}



export default Character
