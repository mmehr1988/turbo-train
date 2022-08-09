import React from 'react';
import ReactDOM from 'react-dom/client';

import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';

import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

import { MenuContextProvider, ContactContextProvider } from './Context';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <MenuContextProvider>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </MenuContextProvider>
    {/* <ReactQueryDevtools initialiIsOpen={false} position='bottom-right' /> */}
  </QueryClientProvider>
);
