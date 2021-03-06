import React from 'react';
import moment from 'moment';
import Status from '../components/Status.jsx'
import {addTodo} from '../helpers/todos.jsx'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: (this.props.data.status_id - 1 ) || 0,
    };

    this.setStatus = this.setStatus.bind(this);
  }

  setStatus(val) {
    console.log("val", val)
    if (val === 3) {
      let contents = this.props.data.contents
      let newDate = moment(this.props.data.timestamp).add(1, "days").format();

      this.props.addTodo(contents, newDate);
    }

    this.props.updateTodo(this.props.data.id, val);
    return this.setState({status: val});
  }

  render() {
    return(
      <div className="todo-container">
        <div className="todo">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-1">
              <Status statuses={this.props.statuses} status={this.state.status} setStatus={this.setStatus} />
            </div>
            <div className="col-xs-10 left-margin">
              <div className="todo-text">{this.props.data.contents}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  data: React.PropTypes.object.isRequired,
  addTodo: React.PropTypes.func.isRequired,
  updateTodo: React.PropTypes.func.isRequired,
  statuses: React.PropTypes.array.isRequired
}

export default Todo;