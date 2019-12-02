---
title: 农历信息查询
order: 1
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BirthdayHoroscopes from 'birthday-horoscopes';
import { DatePicker, Form } from '@alifd/next';
import moment from 'moment';
moment.locale('zh-cn');

const Item = Form.Item;
const formItemLayout = {
    labelCol: {
        fixedSpan: 4
    },
    wrapperCol: {
        span: 14
    }
};

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
    const lunar = BirthdayHoroscopes.solar2lunar(date.year(), date.month() + 1, date.date());

    return (
      <div>
        输入阳历日期: <DatePicker defaultValue={date} onChange={this.handleDateChange}/>
        <hr/>
        <Form {...formItemLayout} size="small">
          <Item label="阳历:"><p>{lunar.cYear}-{lunar.cMonth}-{lunar.cDay}</p></Item>
          <Item label="农历:"><p>{lunar.lYear} {lunar.IMonthCn} {lunar.IDayCn}</p></Item>
          <Item label="干支纪年:"><p>{lunar.gzYear} {lunar.gzMonth} {lunar.gzDay}</p></Item>
          <Item label="星期:"><p>{lunar.ncWeek}</p></Item>
          <Item label="星座:"><p>{lunar.astro}</p></Item>
          <Item label="生效:"><p>{lunar.Animal}</p></Item>
        </Form>
        <hr/>
        <code style={{fontSize:12}}>{JSON.stringify(lunar)}</code>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
