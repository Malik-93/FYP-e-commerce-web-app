import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Admin extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title"  />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="number" name="price" id="price" />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input type="text" name="company" id="company" />
        </FormGroup>
        <FormGroup>
          <Label for="info">Info</Label>
          <Input type="textarea" name="info" id="info" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="file" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}