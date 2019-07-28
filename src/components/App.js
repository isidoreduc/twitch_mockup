import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      {/* there is also a HashRouter, and a MemoryRouter used in deployment */}
      <Router history={history}>
        {/* header component needs to be in browserrouter to be able to use links */}
        <Header />
        <div>
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
