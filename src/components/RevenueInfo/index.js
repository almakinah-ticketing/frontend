import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class RevenueInfo extends Component {
  constructor(props) {
    super(props);
    this._calculateAllTimeRevenues = this._calculateAllTimeRevenues.bind(this);
    this._calculateAllTimeTicketsSold = this._calculateAllTimeTicketsSold.bind(this);
    this._dataToChart = this._dataToChart.bind(this);
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
    return Math.round(totalRevenues);
  }

  _calculateAllTimeTicketsSold() {
    const { events } = this.props;
    var totalTicketsSold = 0;
    for (var i = 0; i < events.length; i++) {
      totalTicketsSold += events[i].tickets_sold;
    }
    return totalTicketsSold;
  }

  _dataToChart() {
    const { events } = this.props;
    if (events.length !== 0) {
      var revenuesPerMonth = events[0].total_revenues_per_month_for_all_events;
      var ticketsSoldPerMonth = events[0].total_tickets_sold_per_month_for_all_events;
      var chartData = [];
      for (var key in revenuesPerMonth) {
        chartData.push({"Month": key, "Revenues": revenuesPerMonth[key], "Tickets sold": ticketsSoldPerMonth[key]});
      }
    }
    console.log(chartData);
    return chartData;
  }

  render() {
    const { events, loading, error } = this.props;
    if (events.length === 0) {
      if (loading) {
        return (<p className="loading-message">Loading your revenue and ticket information...</p>);
      } else if (error) {
        return (<p className="error-message">Oops, something went wrong!</p>);
      } else {
        return null;
      }
    } else {
      return(
        <div className="revenue-info container">
          <h3>Since you started...</h3>
          <div className="row">
            <p className="all-time-revenues col-sm-6 col-md-6 col-lg-6 col-xl-6">EGP {this._calculateAllTimeRevenues()} <p classname="revenues-word">in revenues</p></p>
            <p className="all-time-tickets-sold col-sm-6 col-md-6 col-lg-6 col-xl-6">{this._calculateAllTimeTicketsSold()} <p classname="revenues-word">tickets sold</p></p>
          </div>
          <ResponsiveContainer width="80%" height="75%" className="totals-chart row">
          <LineChart
              width={400}
              height={400}
              data={this._dataToChart()}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="Month" />
              <YAxis dataKey="Revenues" yAxisId="left" />
              <YAxis dataKey="Tickets sold" yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Revenues" stroke="#fbc212" yAxisId="left" activeDot={{r: 8}} />
              <Line type="monotone" dataKey="Tickets sold" stroke="#3D6183" yAxisId="right" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        );
    }
  }
}

export default RevenueInfo;