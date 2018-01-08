import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  ResponsiveContainer, LineChart, Line
} from 'recharts';

class RevenueInfo extends Component {
  constructor(props) {
    super(props);
    this._calculateAllTimeRevenues = this._calculateAllTimeRevenues.bind(this);
    this._calculateAllTimeTicketsSold = this._calculateAllTimeTicketsSold.bind(this);
    this._parseDataToChart = this._parseDataToChart.bind(this);
  }

  componentWillMount() {
    const { getEvents } = this.props;
    getEvents({});
  }

  _calculateAllTimeRevenues() {
    const { events } = this.props;
    var totalRevenues = 0;
    for (var i = 0; i < events.length; i++) {
      var eventRevenues = 0;
      var types = events[i].data.types;
      for (var j = 0; j < types.length; j++) {
        var typeRevenues = types[j].price * types[j].tickets_sold_per_type;
        eventRevenues += typeRevenues;
      }
      totalRevenues += eventRevenues;
    }
    return totalRevenues;
  }

  _calculateAllTimeTicketsSold() {
    const { events } = this.props;
    var totalTicketsSold = 0;
    for (var i = 0; i < events.length; i++) {
      totalTicketsSold += events[i].tickets_sold;
    }
    return totalTicketsSold;
  }

  _parseDataToChart() {
    const { events } = this.props;
    for (var i = 0; i < events.length; i++) {
      var monthlyTicketSales = events[i].tickets_sold_per_month;
      var monthlyRevenues = {};
      var types = event.data.types;
      for (var j = 0; j < types.length; j++) {
        var monthlyTicketSalesPerType = types[i].tickets_sold_per_type_month;
        var pricePerType = types[i].price;
        var monthlyRevenuesPerType = {}
        for (key in monthlyTicketSalesPerType) {
          monthlyRevenuesPerType[key] = monthlyTicketSalesPerType[key] * pricePerType;
        }
      }
      for (key in monthlyTicketSales) {
        var revenuesPerMonth = 0;
        monthlyTicketSales[key] * 
      }
    }
  }

  render() {
    this._parseDataToChart();
    return(
      <div className="revenue-info container">
        <h3>In total</h3>
        <div className="row">
          <p className="all-time-revenues col-sm-6 col-md-6 col-lg-6 col-xl-6">EGP {this._calculateAllTimeRevenues()} <p classname="revenues-word">in revenues</p></p>
          <p className="all-time-tickets-sold col-sm-6 col-md-6 col-lg-6 col-xl-6">{this._calculateAllTimeTicketsSold()} <p classname="revenues-word">tickets sold</p></p>
        </div>
        <div className="row">
          <ResponsiveContainer width="100%">
            <LineChart>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      );
  }
}

export default RevenueInfo;