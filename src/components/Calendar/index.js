import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
  render() {
    const {MyCalendar} = this.props;
    return (
    <div>
      <BigCalendar
        events={[{
          title: "Test",
          allDay: true,
          start: "2018-01-14 06:01:02",
          end: "2018-01-14 16:05:35",
        },
        {
          title: "test 2",
          start: "2018-01-15 06:01:02",
          end: "2018-01-15 16:05:35",
        }]}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
    )
  }
}