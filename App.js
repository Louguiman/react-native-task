import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from "./src/navigation"

export default function App() {
  return (
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
   
  );
}

