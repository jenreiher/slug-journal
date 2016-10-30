import React from 'react';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status || 0
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
    // when clicked, displays a little pop up which...
    // maps over status() and return each of the values into a <DisplayStatus /> component, with a setStatus function on it.
    // if the <DisplayStatus /> is clicked, execute the parent setStatus function
  }

  render() {  
    const index = this.state.status;
    const todoStatus = this.getStatus(index);

    return(
      <div onClick={this.toggleStatus}>{todoStatus}</div>
    )
  }

}

Status.propTypes = {
  status: React.PropTypes.number.isRequired
}

export default Status;