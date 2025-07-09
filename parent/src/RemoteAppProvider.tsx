// RemoteAppProvider.tsx
import React from 'react';

const RemoteAppProvider = React.lazy(() =>
  import('shared/AppContext').then((mod) => ({
    default: mod.AppProvider,
  }))
);

export default RemoteAppProvider;