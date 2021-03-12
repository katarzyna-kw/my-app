import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';


export default class App extends Component {
  render () {
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
      </Container>
    );
  }
}