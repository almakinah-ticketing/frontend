import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class EventForm extends Component{
 constructor(){
        super();
        this.state = {
            newEvent: {}
        }
    }

    render(){
      const {
        event,
        addEvent,
        adding,
        error
      } = this.props;

      return(
        <div>
          <h1>Create New Event </h1>
          <div>
            <Form method="post">
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" name="title" id="title"></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="category">Category</Label>

              </FormGroup>
              <FormGroup>
                <Label htmlFor="startdate">Start Date</Label>
                <Input id="startdate" type="datetime-local"></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="enddate">End Date</Label>
                <Input id="enddate" type="datetime-local"></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="overview">Overview</Label>
                <Input id="overview" type="textarea"></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="agenda">Event Agenda</Label>
                <Input id="agenda" type="textarea"></Input>
              </FormGroup>
              <div>
              <FormGroup>
                <Label htmlFor="tickets">Tickets Types</Label>
              </FormGroup>
                <FormGroup>
                  <Label htmlFor="type">Type</Label>
                  <Input id="type" type="text"></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="number">Number of Tickets</Label>
                  <Input id="number" type="number"></Input>
                </FormGroup>
              </div>
            </Form>
          </div>

        </div>
      )
    }
}