import { render } from '@testing-library/react';
import React, { Component } from 'react'

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.value}</b>입니다.
      </div>
    )
  }
}


export default MyName;
