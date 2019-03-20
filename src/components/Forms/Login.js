import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LogIn extends React.Component {
  render() {
    return (
      <Form action='http://localhost:8000/users/login' method='POST'>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />
        </FormGroup>
        <Button>Log In</Button>
        </Form>
        )
    }
}