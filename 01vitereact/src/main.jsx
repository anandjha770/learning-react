// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp() {
  return (
    <>
      <h1>Function in Main.JSX</h1>
    </>
  );
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = "Anand Jha";
const thirstElement = React.createElement(
  'a',
  {
    href: 'https://facebook.com',
    target: '_blank'
  },
  'Visit Facebook' 
)

createRoot(document.getElementById('root')).render(

    <App />

)
