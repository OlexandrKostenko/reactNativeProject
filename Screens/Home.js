import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';

const MainTab = createBottomTabNavigator();

export const Home = () => {
    return (
<MainTab.Navigator screenOptions={{tabBarShowLabel: false}}>
        {/* <MainTab.Screen options={{headerShown: false}} name='Home' component={Home} /> */}
    <MainTab.Screen options={{ headerShown: false, tabBarIcon: ({focused, size, color}) => (<AntDesign name="appstore-o" size={size} color={color} />) }} name='Posts' component={PostsScreen} />
    <MainTab.Screen options={{headerShown: false, tabBarIcon: ({focused, size, color}) => (<AntDesign name="plus" size={size} color={color} />),}} name='CreatePosts' component={CreatePostsScreen} />        
    <MainTab.Screen options={{ headerShown: false, tabBarIcon: ({ focused, size, color }) => (<AntDesign name="user" size={size} color={color} />), }} name='Profile' component={ProfileScreen} />
        
        {/* <MainTab.Screen options={{headerShown: false}} name='Comments' component={CommentsScreen} />
        <MainTab.Screen options={{headerShown: false}} name='Map' component={MapScreen} /> */}

        </MainTab.Navigator>
    )
};