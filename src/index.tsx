import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';

const App: React.FC<{}> = () => {
  return <div className="content">Howdy!</div>;
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
