import React from 'react'
import App from './App';
function Form() {

    const change = (evt) => {
        const {name, value} =evt.target;
        
    }

    return(
    <form>
        <input
        name='playerName'
        type='text'
        value=''
        onChange={ change }
        />
        <input 
        position='position'
        type='text'
        value=''
        onChange={ change }
        />
        <input 
        age='age'
        type='text'
        value=''
        onChange={ change }
        />
        </form>
    )
}
export default Form 