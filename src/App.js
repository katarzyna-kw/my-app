import React, { useState, Component } from 'react'
import axios from 'axios'
import { Button, Form, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       beyonce: '',
       whitney: '',
       britney: '',
       mariah: ''
    }
  }


  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})

  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/81059974-ba71-4082-9824-74856dda88be', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
    const { beyonce, whitney, britney, mariah } = this.state;
    return (
      <div className="wrapper">
        <div className="top">
          <Header as='h2'>let's go, girls</Header>
        </div>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Favorite Beyonce song?</label>
            <input 
              placeholder='Enter song' 
              type="text" 
              name = "beyonce" 
              value = {beyonce} 
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Favorite Whitney song?</label>
            <input 
              placeholder='Enter song' 
              type="text" 
              name = "whitney" 
              value = {whitney} 
              onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite Britney song?</label>
            <input 
              placeholder='Enter song' 
              type="text" 
              name = "britney" 
              value = {britney} 
              onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite Mariah song?</label>
            <input 
              placeholder='Enter song' 
              type="text" 
              name = "mariah" 
              value = {mariah} 
              onChange={this.changeHandler}/>
          </Form.Field>

            <Button color = 'pink' type='submit'>Submit</Button>
          </Form>
      </div>
    );
  }
}