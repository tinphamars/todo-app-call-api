import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Index from './container'
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
