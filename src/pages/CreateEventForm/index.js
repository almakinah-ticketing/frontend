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
      getCategories
    } = this.props;
    getCategories();
    if (this.props.location.pathname.includes('/admin/update')) {
      const { getEvent } = this.props;
      getEvent(this.props.match.params.id);
    }
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
        <div>
        {
          (errorAdding)
          ? <p className="alert alert-danger">{errorAdding}</p>
          : null
        }
        {
          (this.props.location.pathname.includes('/admin/update'))
          ? (Object.keys(event).length !== 0)
            ? <h1>Update <Link to={`/events/${event.data.id}`}>{event.data.title}</Link></h1>
            : null
          : <h1>Create a new event</h1>
        }
          <div className="create-event-form">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input className="input" type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange}></Input>
                <small>Event title must be unique.</small>
              </FormGroup>
              {
                  (this.props.location.pathname.includes('/admin/update'))
                  ? (<FormGroup>
                        <Label htmlFor="category">Category</Label>
                        <select name="category_id" onChange={this.handleChange} value={this.state.category_id}>
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
                  : (<FormGroup>
                      <Label htmlFor="category">Category</Label>
                      <select name="category_id" onChange={this.handleChange}>
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
              <FormGroup>
                <Label htmlFor="img">Event Image</Label>
                <Input className="input" id="img" name="img" type="file" onChange={this.handleFileChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="startdate">Start Date</Label>
                <Input className="input" id="startdate" name="start_datetime" type="datetime-local" value={this.state.start_datetime} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="enddate">End Date</Label>
                <Input className="input" id="enddate" name="end_datetime" type="datetime-local" value={this.state.end_datetime} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="overview">Overview</Label>
                <Input className="input" className="form-control" id="overview" name="overview" type="textarea" value={this.state.overview} onChange={this.handleChange}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="agenda">Event Agenda</Label>
                <Input className="input" className="form-control" id="agenda" name="agenda" type="textarea" value={this.state.agenda} onChange={this.handleChange}></Input>
              </FormGroup>
              <div>
              <FormGroup>
                <Label htmlFor="tickets">Ticket Types</Label>
              </FormGroup>

                {
                  types.map((type, index) => {
                    return (
                      <div className="tickets-types">
                        <FormGroup>
                          <Label htmlFor="type">Type</Label>
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
                          <Input className="input" id="type" name="name" type="text" value={this.state.types_attributes[index].name} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                          <small>Type name must start with a capital letter.</small>                      
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="number">Number of Tickets</Label>
                          <Input className="input" id="number" name="capacity" type="number" value={this.state.types_attributes[index].capacity} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="price">Price</Label>
                          <Input className="input" id="price" name="price" type="number" value={this.state.types_attributes[index].price} onChange={(event) => this.handleTypeChange(event, index)}></Input>
                        </FormGroup>
                      </div>
                    );                    
                  })
                }
                <FormGroup>
                  <Button onClick={this.addType}>Add more types</Button>
                </FormGroup>
              </div>
              <Button type="submit">Submit</Button>
              <Button><Link to={this._cancelButtonLinkPath()}>Cancel</Link></Button>
            </Form>
          </div>
        </div>
      )
    }
}

export default withLastLocation(CreateEventForm);