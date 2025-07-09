import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProvider } from './context/AppContext';

const Child1App = React.lazy(() => import('child1/Child1App'));
const Child2App = React.lazy(() => import('child2/Child2App'));
const Child3App = React.lazy(() => import('child3/Child3App'));

function App() {
  return (
    <AppProvider>
      <h1>Parent App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Child1App />
        <Child2App />
        <Child3App />
      </Suspense>
    </AppProvider>
  );
}

export default App;
