import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    // Fragment is used when we want to create a multi element jsx element without producing efects on the DOM as in the case of using a div tag for example
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Are you sure you want to delete this?'
        actions={actions}
      />
    </div>
  )
};

export default StreamDelete;
