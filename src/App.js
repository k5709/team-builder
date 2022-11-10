import { useState } from 'react'
import './App.css';
import Form from './form';

const playersList = [
  { playerName: 'Justin Fields', position: 'Quarter Back', age: '22', },
  { playerName: 'Darnell Mooney', position: 'Wide Receiver', age: '25' },
  { playerName: 'David Montgomery', position: 'Running Back', age: '25' },
  { playerName: 'Chase Claypool', position: 'Wide Receiver', age: '24' },
  { playerName: 'Eddie Jackson', position: 'Safety', age: '28' }
]

const initialFormValues = {
  playerName: '',
  position: '',
  age: ''
}

function App() {
  const [players, setPlayers] = useState(playersList);
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = (evt) => {
    const { name, value } = evt.target
    setFormValues({
      ...formValues,
      [name]: value}
      );
  }
  const submit = (evt) => {
    evt.preventDefault()
    const newPlayer = {
      playerName: formValues.playerName.trim(),
      position: formValues.position.trim(),
      age: formValues.age.trim()
  }
  setPlayers(players.concat(newPlayer));
    setFormValues(initialFormValues);
  }

  return (
    <div className='App'>
      <img className='bearslogo' src='https://images.thdstatic.com/productImages/a1087a37-4b67-4e79-beaf-2eb162e208a4/svn/navy-fanmats-sports-rugs-17954-64_400.jpg ' alt='picture of the bears logo' />
      <h1>Da' Bears</h1>
      {playersList.map((players, idx) => {
        return (
          <div key={idx}>
            <p>Player Name: {players.playerName}</p>
            <p>Position: {players.position}</p>
            <p>Age: {players.age}</p>
          </div>
        )
      })}
      <div className='Form'>
        <Form change={change}
         submit={submit}
          formValues={formValues}/>
      </div>
    </div>
  )
}

export default App;
