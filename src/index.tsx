import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/main.scss';

const App: React.FC<{}> = () => {
  return <div className="content">Howdy!</div>;
};

ReactDOM.render(<App />, document.getElementById('app'));
