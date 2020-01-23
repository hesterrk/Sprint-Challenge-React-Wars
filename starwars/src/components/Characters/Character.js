import React from 'react';
import  { StyledCharacter, H1, P } from './styledCharacter';

function Character(props) { 
    return (
        <StyledCharacter>
        <div>
            <H1>
            Name: {props.name} </H1>
            <P>Birth Year: {props.birth_year}</P>
            <P> Gender: {props.gender} </P>
            <P>Eye Colour: {props.eye_color}</P>
            <P> Mass: {props.mass}</P>
            <P> Height: {props.height}</P>

        </div>
        </StyledCharacter>
    );
}



export default Character
