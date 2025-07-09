import React, { Suspense } from 'react';
import './App.css';
import RemoteAppProvider from './RemoteAppProvider';

const Child1App = React.lazy(() =>
  import('child1/Child1App').then((mod) => ({ default: mod.default }))
);

const Child2App = React.lazy(() =>
  import('child2/Child2App').then((mod) => ({ default: mod.default }))
);

const Child3App = React.lazy(() =>
  import('child3/Child3App').then((mod) => ({ default: mod.default }))
);


function App() {
  return (
    <div>
      <h1>Parent App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteAppProvider>
          <Child1App />
          <Child2App />
          <Child3App />
        </RemoteAppProvider>
      </Suspense>
    </div>
  );
}

export default App;
