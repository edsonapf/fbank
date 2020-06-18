import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import store from './store';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Routes />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
