import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import * as firebase from 'firebase';
import Reduxthunk from 'redux-thunk'
import reducers from './src/reducers';
import LoginForm from './src/reducers/components/LoginForm';
//import thunk from 'redux-thunk';

class App extends Component {
  render() {
    const store=createStore(reducers, {}, applyMiddleware(Reduxthunk))
    return (
      <Provider store={store}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;
