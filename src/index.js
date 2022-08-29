import React from 'react'
import Header from './components/Header.jsx';
import Compo from './components/Compo.jsx';
import { createRoot } from 'react-dom/client';
import './index.css'
function Books () {
  return (<div>
    <Header></Header>
    <Header />
    <h1>Hello</h1>
    <button className='btn'>Button</button>
    <Compo title="React"></Compo>
    <Compo title={1}></Compo>
  </div>)

}
const root = createRoot(document.getElementById('root'));
root.render(<Books/>);