import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {

  componentDidMount() {
    // getting the stream from our redux store
    this.props.fetchStream(this.props.match.params.id);
    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    // after the component updated and received the stream, build player
    this.buildPlayer();
  }

  // when we navigate away from stream page we have to destroy player, so it doesn't continue to request data for nothing
  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    // wirring the player
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>
    return (
      <div>
        {/* controls is a boolean set to true by defaut, it makes us see the player window with controls on it */}
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div >
    )
  }
};

// bringing the state into our component props
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

// connecting our component to the redux store
export default connect(mapStateToProps, { fetchStream })(StreamShow);
