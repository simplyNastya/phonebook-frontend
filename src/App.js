import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import AuthLayout from './components/AuthLayout/AuthLayout'
import Navbar from './components/Navbar/Navbar'

import UserRoutes from './services/userRoutes'

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BrowserRouter basename="phonebook-frontend">
            <AuthLayout>
              <Navbar />
              <UserRoutes />
            </AuthLayout>
          </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
