import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { store } from './app/store';

=======
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Provider } from 'react-redux';
import { store } from './app/store';


>>>>>>> 78cea10 (Night commit)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
