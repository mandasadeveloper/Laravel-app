import React from 'react';
import ReactDOM from 'react-dom';
import "./Admin/index.css";
import '@shopify/polaris/build/esm/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import Index from './Admin';
ReactDOM.render(
<AppProvider>
<BrowserRouter>
<Index/>
</BrowserRouter>
</AppProvider>,
document.getElementById('root')
);