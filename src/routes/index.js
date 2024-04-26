import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Initial from "../pages/Initial";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import {Ionicons} from '@expo/vector-icons'
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import Agendamento from "../pages/Agendamento";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs(){
    return(
     <Tab.Navigator
         screenOptions={{
             tabBarShowLabel: true,
             tabBarStyle:{
                position:"absolute",
                borderTopWidth:0,
                 height: 60,
                 paddingHorizontal: 10,
                 paddingBottom: 10,
                 bottom:14,
                 borderRadius:6,
                 right:14,
                 left:14,
                 elevation:0,

             },
             tabBarActiveTintColor:'#408755',
             tabBarInactiveTintColor:"rgba(0, 0, 0, 0.5)",

         }}
     >

        <Tab.Screen
         name="Início"
         component={Initial}
         options={{headerShown: false,
         tabBarIcon: ({color, size, focused}) => {
            if(focused){
                return <Ionicons name="home" size={size} color={color}/>
            }
            return <Ionicons name="home-outline" size={size} color={color}/>
         }
        }}
         />

         <Tab.Screen
         name="Chat"
         component={Chat}
         options={{headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name="chatbubble-ellipses" size={size} color={color}/>
                }
                return <Ionicons name="chatbubble-ellipses-outline" size={size} color={color}/>
             }
        }}
     />

     
 
    
     <Tab.Screen
         name="Perfil"
         component={Profile}
         options={{headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name="person-circle" size={size} color={color}/>
                }
                return <Ionicons name="person-circle-outline" size={size} color={color}/>
             }
        }}
        
     />
 
     </Tab.Navigator>
 
    )
     
 }
 

function Routes(){
   return(
    <Stack.Navigator>
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
        />
        
        <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
        />

    <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
        />
    
    <Stack.Screen
        name="Register2"
        component={Register2}
        options={{headerShown: false}}
        />

    <Stack.Screen
        name="Initial"
        component={Tabs}
        options={{headerShown: false}}
    />

    <Stack.Screen
        name="Agendamento"
        component={Agendamento}
        options={{headerShown: false}}
    />
    

    </Stack.Navigator>

   )
    
}

export default Routes;
