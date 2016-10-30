import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.data.status || 0
    };

    this.toggleStatus = this.toggleStatus.bind(this);
  }

  status() {
    return(
      [
        { 0: '.'},
        { 1: 'x'},
        { 2: '>'},
        { 3: '?'}
      ]
    )
  }

  getStatus(index) {
    let status = this.status()[index]
    return status[index];
  }

  toggleStatus() {
    let index = this.state.status + 1;
    if (index >= this.status().length) {
      index = 0;
    }

    this.state.status = index
    return this.setState(this.state);
  }

  render() {
    const index = this.state.status;
    const todoStatus = this.getStatus(index);

    return(
      <div>
        <div onClick={this.toggleStatus}>{todoStatus}</div>
        <div>{this.props.data.contents}</div>
        <br />
      </div>
    )
  }

}

Todo.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Todo;