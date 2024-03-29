import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/setting';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.screen name="Home" component={HomeScreen} />
            <Tab.screen name="Setting" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

