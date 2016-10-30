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

  setStatus(val) {
    if (val === 2) {
      let newDate = moment(this.props.data.timestamp).add(1, "days").format();
      addTodo(this.props.data.contents, newDate);
      this.props.rerender();
    } 
    this.setState({status: val});
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
  data: React.PropTypes.object.isRequired,
  rerender: React.PropTypes.func.isRequired
}

export default Todo;