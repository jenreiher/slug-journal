import React from 'react';
import moment from 'moment';
import Status from '../components/Status.jsx'
import {addTodo} from '../helpers/todos.jsx'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.data.status || 0,
    };

    this.setStatus = this.setStatus.bind(this);
  }

  componentDidUpdate() {
    if (this.state.status === 2) {
      console.log("status is forwarded")
    } 
  }

  setStatus(val) {
    return this.setState({status: val});
  }

  render() {
    return(
      <div>
        <Status status={this.state.status} setStatus={this.setStatus} />
        <div className="todo-text">{this.props.data.contents}</div>
        <br />
      </div>
    );
  }

}

Todo.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Todo;