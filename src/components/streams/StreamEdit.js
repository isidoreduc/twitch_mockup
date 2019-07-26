import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamsForm from './StreamsForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {

    if (!this.props.stream) return <div>Loading...</div>;
    return <div>
      <h3>Edit the stream</h3>
      {/* lodash pick func allows us to only pick the needed properties from the stream object */}
      <StreamsForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, 'title', 'description')} />
    </div>;

  }

};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
