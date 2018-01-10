import React, { Component } from 'react';
import './PurchaseForm.css';
import history from '../../history';
import Checkout from '../../Checkout';
var t1 = 0;
var t2 = 0;

export default class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    const {types} = this.props;
    this.state = {};
  }


  componentWillReceiveProps(nextProps){
    const {types} = nextProps;

    if (Object.keys(this.state).length === 0 && Object.keys(types).length !== 0) {
      const state = {};
      types.map((type) => {
        state[type.name] = 0;
      });
      this.setState({
        ...state,
        type_ids: []
      });
    }
  }

  componentWillMount(){
    const { isAuthenticated, currentUser } = this.props;
    if (!isAuthenticated && !currentUser.admin_id) {
      history.push('/login');
    }
    const eventId = this.props.match.params.id;
    this.props.getTypes(eventId);
    }

  _increment(type, event) {
    if (this.state[type.name]==type.available_tickets){
      this.setState({
      [type.name]: this.state[type.name]
    })
    }else{
      const type_ids = this.state.type_ids.slice(0);
      type_ids.push(type.id);
      this.setState({
      [type.name]: this.state[type.name] + 1,
      type_ids
    })
    }
    
  }

   _decrement(type, event) {
    if (this.state[type.name]==0){
      this.setState({
      [type.name]: this.state[type.name]
    })
    }else {
      const type_ids = this.state.type_ids.slice(0);
      delete type_ids[type_ids.indexOf(type.id)];
      this.setState({
        [type.name]: this.state[type.name] - 1,
        type_ids
      })
    }
  }

  // totalTickets(){
  //   if (Object.keys(this.state).length !== 0) {
  //     types.map((type) => {
  //       const totalTickets = this.state[type.name] ;
  //       console.log(totalTickets)
  //       totalTickets = totalTickets + this.state[type.name];
  //       console.log(totalTickets)
  //     });
  //   }
  // }
   render() {
    // console.log(this.state, this.state['Type 1']+this.state['Type 2']+this.state['Type 3']);
    const {types, loading, error, count, increment, decrement} = this.props;
    const {type_ids} = this.state;
    let total = 0;
    console.log(type_ids);
    return(
      <div>
        <h2>PurchaseForm</h2>
        {
        types.map((type) => {
          const count = this.state[type.name];
          total += type.price * count;
         // console.log(this.state[type.name]+count);
        const eveId = this.props.match.params.id;
        t1 = eveId;
        // console.log(t1);
        var getTyped = type.id;
        t2 = getTyped;
        // console.log(t2);
        // console.log(type_ids);
        
          return (
            <div>
              <div className="clearfix">
                <label className="typeName">{type.name}     </label>
                <label className="typePrice">{type.price} EGP</label>
                <div className="counter">
                  <label>{count}</label>  
                  <button onClick={(event) => {this._increment(type, event)}}>+</button>
                  <button onClick={(event) => {this._decrement(type, event)}}>-</button>
                </div>
              </div>
              
            </div>
            )
        })
      }  
      <div>
        <label>Total</label>
        {
          total
        }
      </div>
      <div>
        <button>Add to Cart</button>
        <p>
                  <Checkout
                    name={'The Road to learn React'}
                    description={'Only the Book'}
                    amount={total}
                    event_id={t1}
                    type_id={t2}
                    type_ids={type_ids}
                  />
        </p>
        <button>cancel</button>
      </div>
      </div>
    );
  }
}



// if (type_ids) {

// }