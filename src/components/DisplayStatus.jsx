import React from 'react';

class DisplayStatus extends React.Component {
  constructor(props) {
    super(props);

    this.setParentStatus = this.setParentStatus.bind(this)
  }

  setParentStatus() {
    this.props.setStatus(this.props.index);
  }

  render() {
    let className = `fa ${this.props.data} fa-lg`
    return(
      <button onClick={this.setParentStatus} className="btn">
        <i className={className} />
      </button>
    );
  }
}

DisplayStatus.propTypes = {
  setStatus: React.PropTypes.func,
  data: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired
}

export default DisplayStatus;
