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

  componentDidUpdate() {
    if (this.getStatus(this.state.status) === '>') {
      console.log(this.state)
    } 
    return false;
  }


  toggleClass() {
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
        <div className="status" onClick={this.toggleClass}>{todoStatus}</div>
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