import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
  componentWillMount() {
    const {
		getCalendar
    } = this.props;
    getCalendar();
  }


  render() {
    const {calendar, loading, error} = this.props;
    const testdata = [{
      title: "Test",
      start: "2018-01-13T06:01:02.000Z",
      end: "2018-01-14 16:05:35",
    },
    {
      title: "test 2",
      start: "2018-01-15 06:01:02",
      end: "2018-01-15 16:05:35",
    }];
    return (
    <div>
      <BigCalendar
        events={calendar}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
    )
  }
}

