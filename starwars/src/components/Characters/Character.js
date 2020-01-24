import React from 'react';
import  { StyledCharacter, H1, P, Button, Buttonquiz } from './styledCharacter';

function Character(props) { 
    return (
        <StyledCharacter>
        <div>
            <H1>
            Name: {props.name} </H1>
            <P color="#727a17">Birth Year: {props.birth_year}</P>
            <P> Gender: {props.gender} </P>
            <P color="#727a17">Eye Colour: {props.eye_color}</P>
            <P> Mass: {props.mass}</P>
            <P color="#727a17"> Height: {props.height}</P>
            
            <Button> More Information 👽</Button>
            <Buttonquiz> Character Quiz! </Buttonquiz>

        </div>
        </StyledCharacter>
    );
}


export default Character
