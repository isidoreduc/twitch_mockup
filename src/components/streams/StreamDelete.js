import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    // Fragment is used when we want to create a multi element jsx element without producing efects on the DOM as in the case of using a div tag for example
    return (
      <React.Fragment >
        <button
          className='ui button negative'
          onClick={() => this.props.deleteStream(this.props.match.params.id)}>Delete</button>
        <button className='ui button' onClick={() => history.push('/')}>Cancel</button>
      </React.Fragment >
    );
  }

  renderModalContent = () => {
    if (!this.props.stream)
      return 'Are you sure you want to delete this?'
    return `Are you sure you want to delete the stream: 
    ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderModalContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};



export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
