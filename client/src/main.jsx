import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,  } from 'react-router-dom'
import store from './store'
import {Provider } from 'react-redux'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    </Provider>
 
)
