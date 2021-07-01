import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import Home from './pages/Home'
import MyLinks from './pages/MyLinks'
import WebView from './pages/WebView'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="DrawerRoutes">
            <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} options={{ headerShown: false }} />
            <Stack.Screen name="WebView" component={WebView} options={{ title: '' }} />
        </Stack.Navigator>
    )
}

function DrawerRoutes() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#2CCBB9',
                activeTintColor: '#FFFF',
                marginTop: 16,
                labelStyle: {
                    fontSize: 19
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar Link',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={(focused) ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="MyLinks"
                component={MyLinks}
                options={{
                    title: 'Meus Links',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={(focused) ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

