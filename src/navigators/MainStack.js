import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ReceitaScreen from "../pages/ReceitaScreen";

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen
      component={ReceitaScreen} name="Receita de Bolo"
      options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#AAA',
        },
      }}
    />
  </MainStack.Navigator>
);
