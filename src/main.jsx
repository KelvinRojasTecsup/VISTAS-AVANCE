import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import Menu from "./pages/menu/Menu.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Menu />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);