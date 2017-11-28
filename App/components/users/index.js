import { StackNavigator } from 'react-navigation';
import Login from './login';
import Signup from './signup';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  // Signup: {
  //   screen: Signup,
  //   navigationOptions: {
  //     title: 'Create Account',
  //   },
  // },
});
