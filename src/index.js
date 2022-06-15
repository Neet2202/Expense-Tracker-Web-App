import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="716db7ee-66ab-47f8-9732-0f61ca94f7f1" language="en-US">
       <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
); 

