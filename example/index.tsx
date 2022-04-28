import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Avatar from '../src/index';
import "./index.css";

const App = () => {

  return (
    <div className="avatar-container">
      <Avatar name="aime" size="300"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
