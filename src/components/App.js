import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';

const App = () => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      {/* there is also a HashRouter, and a MemoryRouter used in deployment */}
      <BrowserRouter>
        {/* header component needs to be in browserrouter to be able to use links */}
        <Header />
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
