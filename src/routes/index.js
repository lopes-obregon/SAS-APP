import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import { Ionicons } from "@expo/vector-icons";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import RegisterProfissional from "../pages/RegisterProfissional";
import RegisterProfissional2 from "../pages/RegisterProfissional2";
import Agendamento from "../pages/Agendamento";
import Covid from "../pages/Covid";
import Agendamento2 from "../pages/Agendamento2";
import ChatApp from "../pages/ChatApp";
import Feed from "../pages/Feed";
import ChoiceCadastro from "../pages/ChoiceCadastro";
import AgendamentoMedico from "../pages/AgendamentoMedico";
import AgendamentoMedico2 from "../pages/AgendamentoMedico2";
import MeusAgendamentos from "../pages/MeusAgendamentos";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* Aqui são as rotas para navegar entre as abas e as configurações da Tab Bar*/
function Tabs() {
  return (
    /* Configurações Tab Bar*/
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
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatApp}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="chatbubble-ellipses"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            );
          },
          /* Aqui são as abas e icones da Tab Bar */
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="person-circle" size={size} color={color} />
              );
            }
            return (
              <Ionicons
                name="person-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Meus Agendamento"
        component={MeusAgendamentos}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="calendar" size={size} color={color} />;
            }
            return (
              <Ionicons name="calendar-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

/* Abaixo estão as rotas*/
function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{ headerShown: false }}
      />

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

      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Agendamento"
        component={Agendamento}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Agendamento2"
        component={Agendamento2}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AgendamentoMedico"
        component={AgendamentoMedico}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AgendamentoMedico2"
        component={AgendamentoMedico2}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Covid"
        component={Covid}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChoiceCadastro"
        component={ChoiceCadastro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
