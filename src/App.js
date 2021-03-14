import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Beyonce: '',
      Whitney: '',
      Britney: '',
      Mariah: ''
    }
  }


  changeHandler = (e) => {
    this.setState({[e.target.Beyonce] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    const { Beyonce, Whitney, Britney, Mariah } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form">
          <Form.Field>
            <label>Favorite Beyonce song?</label>
            <input placeholder='Enter your favorite Beyonce song' type="text" name = "Beyonce" value = {Beyonce} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite Whitney song?</label>
            <input placeholder='Enter your favorite Whitney song' type="text" name = "Whitney" value = {Whitney} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Britney</label>
            <input placeholder='Enter favorite Britney song' />
          </Form.Field>
          <Form.Field>
            <label>Mariah</label>
            <input placeholder='Enter favorite Mariah song' />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}