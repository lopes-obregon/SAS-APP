import React from 'react';

import { StatusBar } from 'react-native';
import * as Notifications from 'expo-notifications';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes'
import AsyncStorage from '@react-native-async-storage/async-storage';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
//remove os dados salvos no storage
async function deleteAgendamentoSalvo(){
  await AsyncStorage.removeItem("agendamento").then(()=>{
    console.log("Dado removido com sucesso!");
  }).catch(err => {
    console.log("Falha para deletar o dado:", err);
  });


}
export default function App() {
  const getAgendamento = async ()=>{
    //recebe o valor salvo no storage
    let valor = await AsyncStorage.getItem("agendamento").catch(err =>console.log("Error ao ler os dados salvos:", err) )
    if(valor !== null){
      console.log("Dados recuperados");
      let notificação = await Notifications.scheduleNotificationAsync({
        content:{
          title:'SAS Agendamento',
          body: valor
        },
        trigger: {seconds: 2},
      })
      console.log(notificação);
    }else{
      console.log("Dados inexistentes!");
    }

  };
  //deleteAgendamentoSalvo();
  //cahama a função para retornar o agendamento.
  getAgendamento();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#408755" barStyle="light-content"/>
        <Routes/>
    </NavigationContainer>
        
  );
}
