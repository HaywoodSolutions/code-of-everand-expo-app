import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from '../firebase';

import AddAuth from './AddAuth';
import Game from './Game';

const Stack = createStackNavigator();

export default class App extends React.Component<{}, {
  isLoaded: boolean,
  isSignedIn: boolean
}> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoaded: false,
      isSignedIn: false
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        isLoaded: true,
        isSignedIn: user != null
      });
    })
  }

  render() {
    if (!this.state.isLoaded)
      return null;
    if (!this.state.isSignedIn)
      return <AddAuth />;
    return <Game />;
  }
}