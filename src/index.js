import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/global.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Main from './components/Main';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PageWrapper from './components/PageWrapper';
import Experience from './components/Experience';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWrapper>
        <Main />
      </PageWrapper>
    ),
  },
  {
    path: '/about',
    element: (
      <PageWrapper>
        <About />
      </PageWrapper>
    ),
  },
  {
    path: '/skills',
    element: (
      <PageWrapper>
        <Skills />
      </PageWrapper>
    ),
  },
  {
    path: '/experience',
    element: (
      <PageWrapper>
        <Experience />
      </PageWrapper>
    ),
  },
  {
    path: '/contact',
    element: (
      <PageWrapper>
        <Contact />
      </PageWrapper>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
