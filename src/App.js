import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';


export default class App extends Component {
  render () {
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form">
          <Form.Field>
            <label>Favorite Beyonce song</label>
            <input placeholder='Enter song' />
          </Form.Field>
          <Form.Field>
            <label>Favorite Whitney song</label>
            <input placeholder='Enter song' />
          </Form.Field>
          <Form.Field>
            <label>Favorite Britney song</label>
            <input placeholder='Enter song' />
          </Form.Field>
          <Form.Field>
            <label>Favorite Mariah song</label>
            <input placeholder='Enter song' />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}