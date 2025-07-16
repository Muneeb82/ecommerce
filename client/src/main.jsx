import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
<<<<<<< HEAD
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
=======
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Provider } from 'react-redux';
import { store } from './app/store';


>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
