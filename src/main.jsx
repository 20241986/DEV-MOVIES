import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';


const rootElement = document.getElementById('root');


const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
   </BrowserRouter>
    <GlobalStyles />
  </StrictMode>,
);
