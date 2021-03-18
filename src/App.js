import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, Header } from 'semantic-ui-react'
import './App.css';

function App() {
  const [beyonce, setBeyonce] = useState('');
  const [whitney, setWhitney] = useState('');
  const [britney, setBritney] = useState('');
  const [mariah, setMariah] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const objt = { beyonce, whitney, britney, mariah };
      
    axios
      .post(
        'https://sheet.best/api/sheets/81059974-ba71-4082-9824-74856dda88be', 
        objt
      )
    .then((response) => {
      console.log(response);
    });
  };
  
  return (
    <div className="wrapper">
      <div className="top">
        <Header as='h2'>let's go, girls</Header>
      </div>
      <Form className="form">
        <Form.Field>
          <label>Favorite Beyonce song?</label>
          <input 
            placeholder='Enter song' 
            onChange={(e) => setBeyonce(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Favorite Whitney song?</label>
          <input 
            placeholder='Enter song' 
            onChange={(e) => setWhitney(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Favorite Britney song?</label>
          <input 
            placeholder='Enter song' 
            onChange={(e) => setBritney(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Favorite Mariah song?</label>
          <input 
            placeholder='Enter song' 
            onChange={(e) => setMariah(e.target.value)}
          />
        </Form.Field>

        <Button type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;