import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map(strm => {
      return (
        <div className='item' key={strm.id}>
          {this.renderAdminFunctionality(strm)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {strm.title}
            <div className='description'>{strm.description}</div>
          </div>
          
        </div>
      );
    });
  };

  renderCreateStreamButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui button primary'> Create Stream</Link>
        </div>
      )
    }

  }

  renderAdminFunctionality = strm => {
    if (strm.userId === this.props.currentUserId)
      return (
        <div className='right floated content'>
          <Link className='ui button primary' to={`/streams/edit/${strm.id}`}>Edit</Link>

        </div>
      )
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        {this.renderCreateStreamButton()}
        <div className='ui celled list'>{this.renderList()}</div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
