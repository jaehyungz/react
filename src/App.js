import React, { Component } from 'react';
import Mycomponent from './Mycomponent.js';
class App extends Component {
  state = {
    counter: 1,
    error: false
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    //api를 통해서 서버로 오류내용 날리기
  }
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    if (this.state.error) {
      return <div>에러가 나타남</div>;
    }
    return (
      <div>
        {this.state.counter < 10 && <Mycomponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
