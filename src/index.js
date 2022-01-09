import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="a40aae05-5c20-44ca-b47a-f938e35e27e1" Language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
document.getElementById('root'));