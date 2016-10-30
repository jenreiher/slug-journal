import React from 'react';

class DisplayStatus extends React.Component {
  constructor(props) {
    super(props);

    this.setParentStatus = this.setParentStatus.bind(this)
  }

  setParentStatus() {
    this.props.onClick(Object.keys(this.props.data));
  }

  render() {
    let index = Object.keys(this.props.data);

    return(
      <div onClick={this.setParentStatus}>
        {this.props.data[index]}
      </div>
    );
  }

}

DisplayStatus.propTypes = {
  onClick: React.PropTypes.func,
  data: React.PropTypes.object.isRequired,
}

export default DisplayStatus;
