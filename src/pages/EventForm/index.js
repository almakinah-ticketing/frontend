import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './EventForm.css'
// import { SelectCategory } from '../../containers/Categories';


export default class EventForm extends Component{

  // _getBase64(file) {
  //   const {handleNewImage} = this.props;
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     handleNewImage(reader.result, file.name);
  //   };
  //   reader.onerror = function (error) {
  //     console.log('Error: ', error);
  //   };
  // }

 constructor(){
        super();
        this.state = {
          title:"",
          img:"",
          overview:"",
          agenda:"",
          category_id:"",
          start_datetime:"",
          end_datetime:"",
          name:"",
          price:"",
          capacity:"",
          types_attributes: [
          {
            name: '',
            capacity: '',
            price: ''
          }]
        }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addType = this.addType.bind(this);
      this.handleFileChange = this.handleFileChange.bind(this);
    }

  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();
  }
  // handleNewImage: (encodedString, fileName) => {
  //      dispatch(handleNewImage(encodedString, fileName))
  // handleNewImage(e) {
  //   this.setState({[e.target.name]: e.target.value});

  // onChange={(event) => {this._getBase64(event.target.files[0])}}
  



  handleChange(e) {
  this.setState({[e.target.name]: e.target.value});
  }

  handleFileChange(event) {
  let file = event.target.files[0];
  this.setState({img: event.target.files[0]});
  }

  handleTypeChange(e, index) {
    const types = this.state.types_attributes.slice();
     types[index][e.target.name] = e.target.value;
    this.setState({types_attributes: types});
    console.log(this.state);
  }
  
 handleSubmit(event) {
    const {addEvent} = this.props;
    // const {addType} = this.props;
    event.preventDefault();
    // const newState = {
    //   ...this.state,
    //   overview: this.state.overview.split('\n'),
    //   agenda: this.state.agenda.split('\n')
    // }
   

   var title = this.state.title;
   var category_id = this.state.category_id;
   var img = this.state.img;
   var overview = this.state.overview;
   var agenda = this.state.agenda;
   var start_datetime = this.state.start_datetime;
   var end_datetime = this.state.end_datetime;
   var types_copy = this.state.types_attributes.slice(0);
   for (var i = 0; i < types_copy.length; i++) {
   if (types_copy[i]["name"] === '' || types_copy[i]["capacity"] === '' || types_copy[i]["price"] === '') {
      types_copy.splice(i, 1);
    }  
   }
   var filtered_types = types_copy.filter(function(type){
     if (type["name"] !== '' && type["capacity"] !== '' && type["price"] !== '') {
       return type;
      }  
   })
   // the proplem is here
   console.log(filtered_types); 
   // console.log(types_copy);
   this.setState({types_attributes: filtered_types});
   console.log(this.state.types_attributes);
   // types_copy.map((type) => {
   //  if (type["name"] === '' || type["capacity"] === '' || type["price"] === '') {
   //    types
   //  } 
   // });

   var types_attributes = JSON.stringify(filtered_types);
   // var name = this.state.types_attributes.name;
   // var capacity = this.state.types_attributes.capacity;
   // var price = this.state.types_attributes.price;

    var formData = new FormData();
    formData.append("event[title]", title);
    formData.append("event[category_id]", category_id);
    formData.append("event[img]", img);
    formData.append("event[title]", title);
    formData.append("event[overview]", overview);
    formData.append("event[agenda]", agenda);
    formData.append("event[start_datetime]", start_datetime);
    formData.append("event[end_datetime]", end_datetime);
    formData.append("event[types_attributes]", types_attributes);
    // formData.append("event.types_attributes[name]", name);
    // formData.append("event.types_attributes[capacity]", capacity);
    // formData.append("event.types_attributes[price]", price);
  
   addEvent(formData); 
   console.log(this.state); 
  }

  addType() {
    const newType = {
      name: '',
      capacity: '',
      price: ''
    }

    this.setState({types_attributes: [...this.state.types_attributes, newType]});
  }

    render(){
      const {
        event,
        addEvent,
        type,
        addType,
        adding,
        error,
        categories,
        loading
      } = this.props;


      const types = this.state.types_attributes;
      return(
        <div>
          <h1>Create New Event </h1>
          <div className="eventForm">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="category">Category</Label>

                <select name="category_id" onChange={this.handleChange}>
                <option disabled selected value>select category</option>
                  
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
                <Input id="img" name="img" type="file"   onChange={this.handleFileChange}></Input>
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

                {
                  types.map((type, index) => {
                    return (
                      <div>
                        <FormGroup>
                          <Label htmlFor="type">Type</Label>
                          <Input id="type" name="name" type="text" value={this.state.types_attributes[index].name} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="number">Number of Tickets</Label>
                          <Input id="number" name="capacity" type="number" value={this.state.types_attributes[index].capacity} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="price">Price</Label>
                          <Input id="price" name="price" type="number" value={this.state.types_attributes[index].price} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                        </FormGroup>
                      </div>
                    )
                  })
                }
                <FormGroup>
                  <Button onClick={this.addType}>Add More Types</Button>
                </FormGroup>
              </div>
              <Button type="submit">Submit</Button>
            </Form>
          </div>

        </div>
      )
    }
}