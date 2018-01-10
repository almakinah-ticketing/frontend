import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './CreateEventForm.css'
// import { SelectCategory } from '../../containers/Categories';

export default class CreateEventForm extends Component{
 constructor(){
        super();
        if (location.pathname === '/admin/update') {
          this.state = {
            title:"",
            overview:"",
            agenda:"",
            category_id:"",
            start_datetime:"",
            end_datetime:"",
          }
        } else {
          this.state = {
            title:"",
            overview:"",
            agenda:"",
            category_id:"",
            start_datetime:"",
            end_datetime:"",
          }
        }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();
  }

  
  handleChange(e) {
    // this.setState({value: e.target.value});
    // this.setState({...this.state, value: e.target.value})
    this.setState({[e.target.name]: e.target.value});
  }
  
   handleSubmit(e) {
    const {addEvent} = this.props;
    e.preventDefault();
    // const newState = {
    //   ...this.state,
    //   overview: this.state.overview.split('\n'),
    //   agenda: this.state.agenda.split('\n')
    // }
    addEvent(this.state);
  }

    render(){
      const {
        event,
        addEvent,
        adding,
        error,
        categories,
        loading,
        location
      } = this.props;
      console.log("LOCATION");
      console.log(location);
      return(
        <div>
          <h1>Create New Event </h1>
          <div className="create-event-form">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="category">Category</Label>
                <select name="category_id" onChange={this.handleChange}>
                 {
                    categories.map((category) => {
                      return (
                          <option value={category.id}>{category.name}</option>
                        )
                    })
                  }
                </select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="img">Event Image</Label>
                <Input id="img" name="img" type="text"></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="startdate">Start Date</Label>
                <Input id="startdate" name="start_datetime" type="datetime-local" value={this.state.start_datetime} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="enddate">End Date</Label>
                <Input id="enddate" name="end_datetime" type="datetime-local" value={this.state.end_datetime} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="overview">Overview</Label>
                <Input id="overview" name="overview" type="textarea" value={this.state.overview} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="agenda">Event Agenda</Label>
                <Input id="agenda" name="agenda" type="textarea" value={this.state.agenda} onChange={this.handleChange}></Input>
              </FormGroup>
              <div>
              <FormGroup>
                <Label htmlFor="tickets">Tickets Types</Label>
              </FormGroup>
                <FormGroup>
                  <Label htmlFor="type">Type</Label>
                  <Input id="type" name="type" type="text"></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="number">Number of Tickets</Label>
                  <Input id="number" name="number" type="number"></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" name="price" type="number"></Input>
                </FormGroup>
                <FormGroup>
                  <Button>Add More Types</Button>
                </FormGroup>
              </div>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      )
    }
}