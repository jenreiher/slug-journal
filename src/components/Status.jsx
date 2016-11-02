import React from 'react';
import DisplayStatus from '../components/DisplayStatus.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: 'hidden'
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  status() {
    return(
      [ 'fa-radio-checked', 'fa-times-circle', 'fa-circle-arrow-right', 'fa-question-circle' ]
    )
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
    return status;
  }

  setStatus(val) {
    this.props.setStatus(val);
    this.toggleClass();
  }

  displayStatuses() {
    return(
      <div className="statuses">
        {this.status().map((item, index)=> (
          <DisplayStatus key={index} data={item} index={index} setStatus={this.setStatus} />
        ))}
      </div>
    );
  }

  render() {
    const index = this.props.status;
    const todoStatus = `fa ${this.getStatus(index)} fa-lg`;

    return(
      <div className="status">
        <button
          onClick={this.toggleClass}
          className="btn"
        >
          <i className={todoStatus} />
        </button>
        <div className={this.state.toggleClass}>
          {this.displayStatuses()}
        </div>
      </div>
    )
  }

}

Status.propTypes = {
  status: React.PropTypes.number.isRequired,
  setStatus: React.PropTypes.func.isRequired
}

export default Status;