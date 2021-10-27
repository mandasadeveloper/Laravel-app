import React from 'react';
import "./front-page/index.css";
import ReactDOM from 'react-dom';
import Sidebar from './front-page/sidebar';
import { BrowserRouter } from 'react-router-dom';
function MyApp() { 
return (
<BrowserRouter>
<Sidebar/>
</BrowserRouter> 
);
}
const root = document.createElement('div');
const url = window.location.pathname;
if(url==="/account"){
document.getElementsByTagName('Main')[0].innerHTML="";
document.getElementsByTagName('Main')[0].prepend(root);
ReactDOM.render(<MyApp />, root);
}