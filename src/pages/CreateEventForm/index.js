import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './CreateEventForm.css';
import { withLastLocation } from 'react-router-last-location';
import history from '../../history';
// import { SelectCategory } from '../../containers/Categories';


class CreateEventForm extends Component {
 constructor(props){
        super(props);
        this.state = {
          title:"",
          img:"",
          overview:"",
          agenda:"",
          category_id:"",
          start_datetime:"",
          end_datetime:"",
          types_attributes: [
          {
            name: '',
            capacity: '',
            price: '',
          }]
        }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addType = this.addType.bind(this);
      this.handleFileChange = this.handleFileChange.bind(this);
      this._parseDatetime = this._parseDatetimeToInputField.bind(this);
      this._cancelButtonLinkPath = this._cancelButtonLinkPath.bind(this);
  }

  componentWillMount() {
    const {
      lastLocation,
      getCategories,
      handleNewSearchInput
    } = this.props;
    getCategories();
    if (this.props.location.pathname.includes('/admin/update')) {
      const { getEvent } = this.props;
      getEvent(this.props.match.params.id);
    }
    handleNewSearchInput('');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname.includes('/admin/update')) {
          const { event } = nextProps;
          if (Object.keys(event).length !== 0) {
            var types = event.data.types;
            var typesCopy = [];
            if (types.length !== 0) {
              for (var i = 0; i < types.length; i++) {
                console.log(types[i]);
                const obj = {
                  id: types[i].id,
                  name: types[i].name,
                  capacity: types[i].capacity,
                  price: types[i].price
                }
                typesCopy.push(obj);
              }
            }
            const types = event.data.types;
            this.setState({
              title: event.data.title,
              overview: event.data.overview,
              agenda: event.data.agenda,
              category_id: event.data.category.id,
              start_datetime: this._parseDatetimeToInputField(event.data.start_datetime),
              end_datetime: this._parseDatetimeToInputField(event.data.end_datetime),
              types_attributes: typesCopy
            });
          }
        }
    }

    _parseDatetimeToInputField(datetime) {
      var array = datetime.split(':');
      var datetimeToInputField = array[0] + ':' + array[1];
      return datetimeToInputField;
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
    // this.setState({types_attributes: [...this.state.types_attributes, ...types]});
  }
  
 handleSubmit(e) {
    const { event, addEvent, updateEvent, currentUser } = this.props;
    // const {addType} = this.props;
    e.preventDefault();
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

    if (this.props.location.pathname.includes('/admin/update')) {
      var activity = {
        admin_activity: {
        admin_id: currentUser.admin_id, 
        event_id: event.data.id, 
        action: "updated"
        }
      }
      updateEvent(this.props.match.params.id, formData, activity);
      history.push(`/events/${this.props.match.params.id}`);
    } else {
      addEvent(formData, currentUser.admin_id, "created");
    }
  }

  addType() {
    const newType = {
      name: '',
      capacity: '',
      price: ''
    }

    this.setState({types_attributes: [...this.state.types_attributes, newType]});
  }

  deleteType(e, index) {
    const types = this.state.types_attributes.slice();
    if (types[index]["_destroy"] === undefined) {
      types[index]["_destroy"] = true;
    } else {
      delete types[index]["_destroy"];
    }
    this.setState({types_attributes: types});
  }

  // hideType(index) {
  //   if (index === this.state.typeToHide && this.state.isHidden) {
  //     return {
  //       display: "none"
  //     };
  //   }
  // }

  _cancelButtonLinkPath() {
    if (this.props.location.pathname.includes('/admin/update')) {
      return `/events/${this.props.match.params.id}`;
    } else if (this.props.lastLocation) {
      return this.props.lastLocation.pathname;
    } else {
      return '/admin/dashboard';
    }
  }

    render(){
      const {
        event,
        addEvent,
        type,
        addType,
        adding,
        errorAdding,
        categories,
        loading,
        location
      } = this.props;
      const types = this.state.types_attributes;
      return(
        <div className="create-event-form page">
        {
          (errorAdding)
          ? <p className="alert alert-danger">{errorAdding}</p>
          : null
        }
        {
          (this.props.location.pathname.includes('/admin/update'))
          ? (Object.keys(event).length !== 0)
            ? <h2>Update <Link to={`/events/${event.data.id}`}>{event.data.title}</Link></h2>
            : null
          : <h2>Create a new event</h2>
        }
          <div className="create-event-form-contents">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className="group-with-small">
                <Label htmlFor="title" className="sr-only">Title</Label>
                <Input type="text" name="title" id="title" className="form-control" aria-describedby="titleHelp" placeholder="Title" value={this.state.title} required minLength="1" maxLength="280" onChange={this.handleChange}></Input>
                <small id="titleHelp" className="form-text text-muted">Event title must be unique.</small>
              </FormGroup>
              {
                  (this.props.location.pathname.includes('/admin/update'))
                  ? (<FormGroup className="select-group">
                        <Label htmlFor="category" className="sr-only">Category</Label>
                        <select name="category_id" className="form-control" onChange={this.handleChange} required value={this.state.category_id}>
                        <option disabled selected value>Select category</option>
                          
                         {
                            categories.map((category) => {
                              return (
                                  <option value={category.id}>{category.name}</option>
                                )
                            })
                          }
                        </select>
                      </FormGroup>)
                  : (<FormGroup className="select-group">
                      <Label htmlFor="category" className="sr-only">Category</Label>
                      <select name="category_id" className="form-control" required onChange={this.handleChange}>
                      <option disabled selected value>Select category</option>
                        
                       {
                          categories.map((category) => {
                            return (
                                <option value={category.id}>{category.name}</option>
                              )
                          })
                        }
                      </select>
                      </FormGroup>)
                }
              <FormGroup className="img-form-group">
                <Label htmlFor="img" id="img-label">Choose image</Label>
                <Input id="img" name="img" type="file" className="form-control" required onChange={this.handleFileChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="startdate">Start datetime</Label>
                <Input id="startdate" name="start_datetime" type="datetime-local" required value={this.state.start_datetime} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="enddate">End datetime</Label>
                <Input id="enddate" name="end_datetime" type="datetime-local" required value={this.state.end_datetime} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="overview" className="sr-only">Overview</Label>
                <Input id="overview" name="overview" type="textarea" className="form-control" required minLength="1" maxLength="500" placeholder="Overview" value={this.state.overview} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="agenda" className="sr-only">Event agenda</Label>
                <Input id="agenda" name="agenda" type="textarea" className="form-control" placeholder="Event agenda" required minLength="1" maxLength="5000" value={this.state.agenda} onChange={this.handleChange}></Input>
              </FormGroup>
              <div>
                <FormGroup className="big-type-group">
                  <Label htmlFor="tickets">Ticket types</Label>
                  {
                    types.map((type, index) => {
                      return (
                        <div className="type-group">
                          <FormGroup className="group-with-small">
                            <Label htmlFor="type" className="sr-only">Type</Label>
                            <Input id="type" name="name" type="text" className="form-control" placeholder="Type name" required minLength="1" maxLength="20" aria-describedby="typeNameHelp" value={this.state.types_attributes[index].name} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                            <small id="typeNameHelp" className="form-text text-muted">Type name must start with a capital letter.</small>                      
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor="number" className="sr-only">Number of tickets</Label>
                            <Input id="number" name="capacity" type="number" className="form-control" placeholder="Number of tickets" required pattern="\d*" value={this.state.types_attributes[index].capacity} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                          </FormGroup>
                          <FormGroup className="group-before-delete">
                            <Label htmlFor="price" className="sr-only">Price</Label>
                            <Input id="price" name="price" type="number" className="form-control" placeholder="Price" required pattern="\d*" value={this.state.types_attributes[index].price} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                          </FormGroup>
                          {
                            (this.props.location.pathname.includes('/admin/update'))
                            ? (
                              <div className="delete-type">
                                <input type="checkbox" id="delete-type" onChange={(event) => {this.deleteType(event, index)}} /> 
                                <label htmlFor="delete-type">delete</label>                
                              </div>
                              )    
                            : null    
                          }
                        </div>
                      );                    
                    })
                  }
                  <Button onClick={this.addType} className="btn btn-outline-primary">Add more types</Button>                  
                </FormGroup>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-primary"><Link to={this._cancelButtonLinkPath()}>Cancel</Link></button>
            </Form>
          </div>
        </div>
      )
    }
}

export default withLastLocation(CreateEventForm);