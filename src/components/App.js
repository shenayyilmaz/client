import React from "react";
import {
  BrowserRouter,
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
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        {/* URLpath === '/' */}
        <Route path="/" exact component={StreamList} />

        {/* URLpath.contain('pageTwo') */}
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
