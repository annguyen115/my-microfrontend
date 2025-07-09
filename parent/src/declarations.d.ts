declare module 'child1/Child1App';
declare module 'child2/Child2App';
declare module 'child3/Child3App';
declare module 'shared/AppContext' {
  import * as React from 'react';

  export const AppProvider: React.FC<{ children: React.ReactNode }>;
  export const useAppContext: () => {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
  };
}