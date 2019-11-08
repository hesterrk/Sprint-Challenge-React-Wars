import React from 'react';
import  { styledCharacter } from './styledCharacter';

function Character(props) {
    return (
        <styledCharacter>
        <div>
            <p>{props.name}</p>
            <p>{props.birth_year}</p>

        </div>
        </styledCharacter>
    );
}



export default Character
