import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider as ReduxProvider } from 'react-redux';

import App from './App.tsx';
// import { store } from './common/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      {/* <ReduxProvider store={store}> */}
      <App />
      {/* </ReduxProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
