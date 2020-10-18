import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement // Type Assertion (tell ts compiler this will be HTMLElement)
);
registerServiceWorker();
