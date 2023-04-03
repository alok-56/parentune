import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Userlist from './Screen/Userlist';
import Splash from './Screen/Splash';
import Edit from './Screen/Edit';
import Adduser from './Screen/Adduser';


const stack = createNativeStackNavigator()
export default function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, [])

  return (
    <NavigationContainer>
      <stack.Navigator>
        {
          load ? <stack.Screen name='home' component={Splash} options={{
            headerShown: false
          }} /> : null
        }
        <stack.Screen name="userlist" component={Userlist} options={{
          headerShown: false
        }} />
        <stack.Screen name="edit" component={Edit} options={{
          headerShown: false
        }} />
         <stack.Screen name="add" component={Adduser} options={{
          headerShown: false
        }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

