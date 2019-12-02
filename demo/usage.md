---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BirthdayHoroscopes from 'birthday-horoscopes';
import { DatePicker } from '@alifd/next';
import moment from 'moment';

class App extends Component {
  state = {
    date: moment('2019-2-22', 'YYYY-MM-DD')
  }
  handleDateChange = (date) => {
    console.log(date)
    this.setState({
      date
    })
  }
  render() {
    const {date} = this.state;
    console.log(date.year(), date.month(), date.date())
    const lunar = date ? BirthdayHoroscopes.solar2lunar(date.year(), date.month() + 1, date.date()) : null;
    return (
      <div>
        输入阳历日期: <DatePicker onChange={this.handleDateChange}/>
        <hr/>
        <pre>{JSON.stringify(lunar, null, 2)}</pre>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
