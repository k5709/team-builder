import React from 'react'
import './App.css';


function Form(props) {

    const {
        change,
        formValues,
        submit
    } = props

    return (
        <form onSubmit={submit}>
            <h2>Got what it takes? Create a player here...</h2>
            <label>Player Name:
            <input
                placeholder='Insert Name here..'
                name='playerName'
                type='text'
                value={formValues.playerName}
                onChange={change}
            />
            </label>
            <br />
            <label>Position:
            <select value={formValues.role}
             className='positionSelection'
            onChange={change}>

                <option value=''>Select Position...</option>
                <option value='qb'>Quarter Back</option>
                <option value='wr'>Wide Receiver</option>
                <option value='rb'>Running Back</option>
                <option value='s'>Safety</option>
                <option value='other'>Other</option>
            </select>
            </label>
            <br />
            <label>Age:
            <input
                placeholder='Select age'
                name='age'
                type='number'
                value={formValues.age}
                onChange={change}
            />
            </label>
            <br />
            <button onSubmit={submit}> Submit ya chump! </button>
        </form>
    )
}
export default Form 