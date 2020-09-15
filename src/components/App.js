import React from "react";
// Router is plain router and we can pass our history object . we can accses in action creater
import {
  Router,
  HashRouter,
  MemoryRouter,
  Route,
  Link,
} from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        {/* URLpath === '/' */}
        <Route path="/" exact component={StreamList} />

        {/* URLpath.contain('pageTwo') */}
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </Router>
    </div>
  );
};

export default App;
