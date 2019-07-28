import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    // getting the stream from our redux store
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>
    return <div>
      <h1>{this.props.stream.title}</h1>
      <h5>{this.props.stream.description}</h5>
    </div>;
  }
};

// bringing the state into our component props
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

// connecting our component to the redux store
export default connect(mapStateToProps, { fetchStream })(StreamShow);
