import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
const Drawer = createDrawerNavigator();


export default function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
  }