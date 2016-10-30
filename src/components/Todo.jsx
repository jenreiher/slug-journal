import React from 'react';
import moment from 'moment';
import Status from '../components/Status.jsx'

class Todo extends React.Component {

  render() {
    return(
      <div>
        <Status status={this.props.data.status}/>
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