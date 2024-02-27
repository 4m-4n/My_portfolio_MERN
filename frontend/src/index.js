import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux" //implementing redux
import store from './Store.js';
import {Provider as AlertProvider,positions,transitions} from "react-alert"
import alertTemplate from "react-alert-template-basic"
const root = ReactDOM.createRoot(document.getElementById('root'));
const options={
  position:positions.BOTTOM_RIGHT,
  timeout:2000,
  transition:transitions.SCALE,
}
root.render(
  <React.StrictMode>
    <Provider store={store}>        
   <AlertProvider template={alertTemplate} {...options}>
   <App /> 
   </AlertProvider>              
    </Provider>
    </React.StrictMode>
);
