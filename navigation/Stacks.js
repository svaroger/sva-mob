import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MyTabs from './MyTabs';
import LogoTitle from '../constants/Logo';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

function Stacks({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MyTabs}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                style={styles.MenuContainer}
                source={require('../src/menu.png')}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: Colors.barBack,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
MenuContainer: {
  width: 25,
  height: 20,
  marginHorizontal: 20,
},
});

export default Stacks;
