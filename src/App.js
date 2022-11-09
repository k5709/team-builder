import { useState } from 'react'
import './App.css';
import Form from './form';

const playersList = [
  {playerName: 'Justin Fields', position: 'Quarter Back', age: '22', },
  {playerName: 'Darnell Mooney', position: 'Wide Receiver', age: '25'},
  {playerName: 'David Montgomery', position: 'Running Back', age: '25'},
  {playerName: 'Chase Claypool', position: 'Wide Receiver', age: '24'},
  {playerName: 'Eddie Jackson', position: 'Safety', age: '28'}
]

const initialFormValues = {
  username: '',
  position: '',
  age: ''
}

function App() {
  const [players, setPlayers] = useState(playersList);
  const [formValues, setFormValues] = useState(initialFormValues)



  return(
    <div className='App'>
      <h1>Da Bears</h1>
      { playersList.map((players, idx) =>{
      return(
        <div key={idx}>
          <p>Player Name: {players.playerName}</p>
          <p>Position: {players.position}</p>
          <p>Age: {players.age}</p>
          <Form />

          </div>
          
      )
      })}
    </div>
  )
}

export default App;
