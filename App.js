import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { MainLayout } from './screens/MainLayout'
import AppLoading from "expo-app-loading";
import {useFonts} from './hooks/useFonts';
import { CustomDrawer } from "./navigation/CustomDrawer";
import { Provider } from "react-redux";
import { store } from "./stores/store";

const Stack = createStackNavigator();



const App = () => {

    const [IsReady, SetIsReady] = useState(false);

    const LoadFonts = async () => {
      await useFonts();
    };

    if (!IsReady) {
        return (
          <AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={() => {}}
          />
        );
      }

    return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
        
    )
}

export default App