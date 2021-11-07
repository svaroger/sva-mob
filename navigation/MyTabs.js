import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contacts from './Contacts';
import Credentials from './Credentials';
import Profile from './Profile';

const Tab = createMaterialTopTabNavigator();

function MyTabs({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Contacts" component={Contacts} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Credentials" component={Credentials} />
        </Tab.Navigator>
    );
}

export default MyTabs;
