// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router";

// createRoot(document.getElementById('root')).render(
//    <BrowserRouter basename="/techoskills/">
//     <App />
//   </BrowserRouter>,
// )

// ------------------------- when child route direct not work then ---------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { HashRouter } from "react-router";


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>

)
