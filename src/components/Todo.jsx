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


  // TODO update database with latest value of todo
    // in the appropriate lifecyle method (component will update?)
    // check that the new prop is different from the old prop
    // if it is, post to the put route todos/:id
    // update the status_id to this.state.status + 1

  setStatus(val) {
    if (val === 2) {
      let newDate = moment(this.props.data.timestamp).add(1, "days").format();
      let contents = this.props.data.contents
      this.props.fwdTodo(contents, newDate);
    }
    // fetch(`http://localhost:8000/todos/${this.props.data.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    //   },
    //   body: body
    // }).then(response=> {
    //   return response.json()
    // })
    // .then(responseData=> {
    //   newTodo = responseData;
    //   return newTodo = responseData;
    // }) 
    // should this be within the response?
    this.setState({status: val});
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
  fwdTodo: React.PropTypes.func.isRequired,
  statuses: React.PropTypes.array.isRequired
}

export default Todo;