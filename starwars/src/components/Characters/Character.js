import React from 'react';
import { styledCharacter } from './styledCharacter';

function Character(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.birth_year}</p>

        </div>
    );
}



export default Character
