import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AudioView from '../views/AudioView';
import VideoView from '../views/VideoView';

const Tab = createMaterialTopTabNavigator();

const UibTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Audio" component={AudioView} />
      <Tab.Screen name="Video" component={VideoView} />
    </Tab.Navigator>
  )
}

export default UibTab