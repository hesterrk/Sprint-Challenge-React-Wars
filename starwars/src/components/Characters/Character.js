import React from 'react';
import  { StyledCharacter } from './styledCharacter';

function Character(props) { 
    return (
        <StyledCharacter>
        <div>
            <h1>Name: {props.name}</h1>
            <p>Birth Year: {props.birth_year}</p>
            <p> Gender: {props.gender} </p>
            <p>Eye Colour: {props.eye_color}</p>
            <p> Mass: {props.mass}</p>
            <p> Height: {props.height}</p>

        </div>
        </StyledCharacter>
    );
}



export default Character
