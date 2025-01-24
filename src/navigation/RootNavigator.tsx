// import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
// import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { RegisterOwnerNavigator } from '~navigation/RegisterOwnerNavigator';

export const RootNavigator = () => {
  // return <BottomTabNavigator />;
  // return <RegisterDogNavigator />;
  return <RegisterOwnerNavigator />;
};
