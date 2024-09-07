import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'aos/dist/aos.css';
import './csss/aos.css'
import './csss/bootstrap.min.css'
import './csss/fontawesome.min.css'
import './csss/slick-theme.css'
import './csss/sScrollBar.css'
import './csss/style.css'
import './csss/swiper-bundle.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
