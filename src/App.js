import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }


  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})

  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }
  
  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <div className="wrapper">
        <div className="top">
          <Header as='h2'>let's go, girls</Header>
        </div>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Favorite Beyonce song?</label>
            <input placeholder='Enter song' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite Whitney song?</label>
            <input placeholder='Enter song' type="text" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite Britney song?</label>
            <input placeholder='Enter song' type="text" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Favorite Mariah song?</label>
            <input placeholder='Enter song' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>

            <Button color="pink" type='submit'>Submit</Button>
          </Form>
      </div>
    );
  }
}