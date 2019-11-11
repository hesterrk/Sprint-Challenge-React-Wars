import React from 'react';
import  { StyledCharacter } from './styledCharacter';

function Character(props) { 
    return (
        <StyledCharacter>
        <div>
            <p>Name: {props.name}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p> Gender: {props.gender} </p>

        </div>
        </StyledCharacter>
    );
}



export default Character
