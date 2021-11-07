import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Provider } from 'react-redux';

import store from './redux/store';
import Stacks from './navigation/Stacks';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <DrawerItem
        label="New Stock"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

const Root = () => {
  return (
    <>
     <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Menu" component={Stacks}/>
      </Drawer.Navigator>
     </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
