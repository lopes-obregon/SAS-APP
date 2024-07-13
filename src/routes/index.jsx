import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import ChatApp from "../pages/ChatApp";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import Agendamento from "../pages/Agendamento";
import Agendamento2 from "../pages/Agendamento2";
import Covid from "../pages/Covid";
import Feed from "../pages/Feed";
import { useRoute } from "@react-navigation/native";
import ChoiceCadastro from "../pages/ChoiceCadastro";
import RegisterProfissional from "../pages/RegisterProfissional";
import RegisterProfissional2 from "../pages/RegisterProfissional2";
import AgendamentoMedico from "../pages/AgendamentoMedico";
import AgendamentoMedico2 from "../pages/AgendamentoMedico2";
import MeusAgendamentos from "../pages/MeusAgendamentos";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  const route = useRoute();
  let user = route.params?.params?.user;
  console.log("Dentro da tabs:", user);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          height: 60,
          paddingHorizontal: 10,
          paddingBottom: 10,
          bottom: 14,
          borderRadius: 6,
          right: 14,
          left: 14,
          elevation: 0,
        },
        tabBarActiveTintColor: "#408755",
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        user={user}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={
                focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      >
        {() => <ChatApp user={user} />}
      </Tab.Screen>
      <Tab.Screen
        name="Perfil"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      >
        {() => <Profile user={user} />}
      </Tab.Screen>
      <Tab.Screen
        name="MeusAgendamentos"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="calendar" size={size} color={color} />;
            }
            //return <Ionicons name="home-outline" size={size} color={color} />;
            return (
              <Ionicons name="calendar-outline" size={size} color={color} />
            );
          },
        }}
      >
        {() => <MeusAgendamentos user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="ChoiceCadastro" component={ChoiceCadastro} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Agendamento" component={Agendamento} />
      <Stack.Screen name="Agendamento2" component={Agendamento2} />
      <Stack.Screen name="Covid" component={Covid} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="AgendamentoMedico" component={AgendamentoMedico} />
      <Stack.Screen name="AgendamentoMedico2" component={AgendamentoMedico2} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="RegisterProfissional"
        component={RegisterProfissional}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterProfissional2"
        component={RegisterProfissional2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

//<Stack.Screen name='Tabs' component={Tabs}/>{/* Tela das abas */}

/** */
export default Routes;
