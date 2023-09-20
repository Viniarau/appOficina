import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import { AppProvider } from '../contexts/AppContext';
import Details from '../views/Details';
import { COLORS } from '../constants'
import Indication from '../views/Indication';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              headerShown: true,
              headerTitle: 'App Oficinas',
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
         <Stack.Screen 
            name="Details" 
            component={Details}
            options={{
              headerShown: true,
              headerTitle: 'Voltar',
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen 
            name="Indication" 
            component={Indication}
            options={{
              headerShown: true,
              headerTitle: 'Voltar',
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default Router;