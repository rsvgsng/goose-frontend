import {  BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-widgets/styles.css";
import 'antd/dist/antd.css'; 
import { Provider } from "react-redux";
import { store } from "./store/store";


// store -> Global state
// action -> describes what you want to do
// reducer -> listens to actions and changes the state accordingly
// dispatch -> sends actions to the reducer

const root = ReactDOM.createRoot(
  document.getElementById('goose') as HTMLElement
);
root.render(
    <BrowserRouter>
    
  <Provider store={store}>
    <App />
     </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
