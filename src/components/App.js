import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Display result={`${total} ${operation} ${next}`} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
