import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import ExerciseIcon from '../assets/jump.png'; // ตัวอย่างเท่านั้น ชื่อไฟล์และที่อยู่อาจแตกต่างกันไป



import HomeScreen from '../screens/home';
import BMI from '../screens/bmi';
import ExerciseScreen from '../screens/exercise';



const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: 'white', //
                },
                headerTintColor: 'black', //ตัวอักษร Head
                headerTitleStyle: { 
                    fontWeight: 'blod',
                },
                tarBarActiveTintColor: 'lightblue',
                tarBarInactiveTintColor: 'gay',
                tabBarLabelStyle: {
                    fontSize: 14, // ปรับขนาดตัวอักษรแท็บ

                },
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name == 'home') {
                        iconName = 'home'
                    } else if (route.name == 'bmi') {
                        iconName = 'calculator'
                    } else if (route.name == 'exercise') {
                        return <Image source={ExerciseIcon} style={{ width: 30, height: 29, tintColor: color }} />;
                }
                return <Ionicons name={iconName} color={color} size={30} />; // ปรับขนาดตัวอักษณไอคอน
            }})}
        >
            <Tab.Screen 
                name="home" 
                component={HomeScreen} 
                options= {{ 
                    title: 'Home' 
                 }}
            />
             <Tab.Screen 
                name="bmi" 
                component={BMI} 
                options= {{ 
                title: 'Calculate BMI' 
                }}
            />
            <Tab.Screen 
                name="exercise" 
                component={ExerciseScreen} 
                options= {{  
                    title: 'Exercise' 
            }}
            />
           
        </Tab.Navigator>
    );
}
