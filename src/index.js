import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CrudApp } from './CRUD/CrudApp';
import { InterviewApp } from './INTERVIEWCODINGQUESTIONS/InterviewApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CrudApp/> */}
    <InterviewApp/>
  </React.StrictMode>
);

reportWebVitals();
