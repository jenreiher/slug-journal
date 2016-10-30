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
      let contents = this.props.data.contents
      this.props.newTodo(contents, newDate);
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
  newTodo: React.PropTypes.func.isRequired
}

export default Todo;