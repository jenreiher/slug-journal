import React from 'react';
import DisplayStatus from '../components/DisplayStatus.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status || 0,
      toggleClass: 'hidden'
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.setStatus = this.setStatus.bind(this);
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


  toggleClass() {
    // when clicked, displays a little pop up which...
    // maps over status() and return each of the values into a <DisplayStatus /> component, with a setStatus function on it.
    // if the <DisplayStatus /> is clicked, execute the parent setStatus function
    if (this.state.toggleClass === '') {
      this.setState({toggleClass: 'hidden'});
    } else {
      this.setState({toggleClass: ''});
    }
  }

  getStatus(index) {
    let status = this.status()[index]
    return status[index];
  }

  displayStatuses() {
    return(
      <div className="statuses">
        {this.status().map((displayVal, index)=> (
          <DisplayStatus key={index} data={displayVal} onClick={this.setStatus} />
        ))}
      </div>
    );
  }

  setStatus(val) {
    this.setState({status: val});
    this.toggleClass();
  }

  render() {  
    const index = this.state.status;
    const todoStatus = this.getStatus(index);

    return(
      <div>
        <div onClick={this.toggleClass}>{todoStatus}</div>
        <div className={this.state.toggleClass}>
          {this.displayStatuses()}
        </div>
      </div>
    )
  }

}

Status.propTypes = {
  status: React.PropTypes.number.isRequired
}

export default Status;