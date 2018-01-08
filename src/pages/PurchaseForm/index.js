import React, { Component } from 'react';
import './PurchaseForm.css';
import history from '../../history';
import Checkout from '../../Checkout';

export default class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    const {types} = this.props;
    this.state = {};
  }

  componentWillReceiveProps(nextProps){
    const {types} = nextProps;

    if (Object.keys(this.state).length === 0) {
      types.map((type) => {
        this.state[type.name] = 0;
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
      this.setState({
      [type.name]: this.state[type.name] + 1
    })
    }
    
  }

   _decrement(type, event) {
    if (this.state[type.name]==0){
      this.setState({
      [type.name]: this.state[type.name]
    })
    }else {

      this.setState({
        [type.name]: this.state[type.name] - 1
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
    let total = 0;
    return(
      <div>
        <h2>PurchaseForm</h2>
        {
        types.map((type) => {
          const count = this.state[type.name];
          total += type.price * count;
         // console.log(this.state[type.name]+count);
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
                  />
                </p>
        <button>cancel</button>
      </div>
      </div>
    );
  }
}



