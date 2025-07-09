declare module 'shared/AppContext' {
  import * as React from 'react';

  export const AppProvider: React.FC<{ children: React.ReactNode }>;
  export const useAppContext: () => {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
  };
}