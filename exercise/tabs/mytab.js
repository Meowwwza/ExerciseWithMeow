import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SettingsScreen from "../screens/setting";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: 'black', //ตัวอักษร Head
                headerTitleStyle: {
                    fontWeight: 'blod',
                },
                tarBarActiveTintColor: 'lightblue',
                tarBarInactiveTintColor: 'gay',
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = 'home'
                    } else if (route.name == 'Settings') {
                        iconName = 'settings-sharp'
                    }
                    return <Ionicons name={iconName} color={color} size={25} />
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'หน้าหลัก' }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{  title: 'ตั้งค่า' }}/>

        </Tab.Navigator>
    );
}
