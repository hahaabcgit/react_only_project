import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; // App.js 파일을 의미합니다.
import reportWebVitals from './reportWebVitals';

//리액트 라우터를 사용하기 위해서 BrowserRouter를 App 외부에 감싸주는 역할
// App.js 파일을 index.js파일이 포함하고 있으므로, BrowserRouter는 index.js 파일에 한번만 명시해 주면 됩니다.
import { BrowserRouter } from 'react-router-dom'; //추가

const root = ReactDOM.createRoot(document.getElementById('root'));

/* StrictMode 모드는 개발 도중 발생할 수있는 문제를 꼼꼼히 감지하기 위하여
rendering을 두 번실행해줍니다.
따라서, <React.StricMode>를 삭제하도록합니다.
*/
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter> 
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
