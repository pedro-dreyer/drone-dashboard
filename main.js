  // Set the configuration for your app
var config = {
    apiKey: "AIzaSyA9YffQDuoEARdSgGIFsD_pJryF2lIAHTQ",
    authDomain: "drone-dashboard-d714c.firebaseapp.com",
    databaseURL: "https://drone-dashboard-d714c.firebaseio.com",
    storageBucket: "drone-dashboard-d714c.appspot.com"
};
firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();


function updateValue(id, value){
    document.getElementById(id).innerHTML=value
    if (value == 'NORMAL' || value == 'ATIVO') {
      document.getElementById(id).style.color = '#5ab190'
    }

    if (value == 'ATENÇÃO') {
      document.getElementById(id).style.color = '#fec925'
    }

    if (value == 'CRITICO' || value == 'DESATIVADO') {
      document.getElementById(id).style.color = '#fa1e44'
    }

}

function updateBaterry(id, value){

  if (value == 0){
    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#800000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#800000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#008000"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#008000"
  }

  if (value == 1){

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#800000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#008000"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#008000"
    
  }

  if (value == 2) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#008000"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#008000"

  }

  if (value == 3) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#808000"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#008000"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#008000"
  }

  if (value == 4) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#008000"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#008000"
  }

  if (value == 5) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#00ff00"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#008000"
  }

  if (value == 6) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = "#ff0000"
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = "#ffff00"
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = "#00ff00"
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = "#00ff00"
  }

}

database.ref('sensors/tensao/value').on('value', snapshot => updateValue('tensao_status', snapshot.val()))
database.ref('sensors/banco_ativo/value').on('value', snapshot => updateValue('banco_status', snapshot.val()))
database.ref('sensors/acoplamento/value').on('value', snapshot => updateValue('acoplamento_status', snapshot.val()))
database.ref('sensors/recarga/value').on('value', snapshot => updateValue('recarga_status', snapshot.val()))
database.ref('sensors/aproximacao/value').on('value', snapshot => updateValue('aproximacao_status', snapshot.val()))
database.ref('sensors/temperatura/data_stream').on('value', snapshot => updateValue('temperatura_value', snapshot.val()))

database.ref('carbono/sinal_ac/value').on('value', snapshot => updateBaterry('sinal_ac_battery', snapshot.val()))
database.ref('carbono/sensor_h2_1/value').on('value', snapshot => updateBaterry('sensor_h2_1_battery', snapshot.val()))
database.ref('carbono/sensor_h2_1/value').on('value', snapshot => updateBaterry('sensor_h2_1_battery', snapshot.val()))
database.ref('carbono/sw_hidropneumatica/value').on('value', snapshot => updateBaterry('sw_hidropneumatica_battery', snapshot.val()))
database.ref('carbono/valvula_o2/value').on('value', snapshot => updateBaterry('valvula_o2_battery', snapshot.val()))
database.ref('carbono/buffer_sensor_h2_2/value').on('value', snapshot => updateBaterry('buffer_sensor_h2_2_battery', snapshot.val()))
database.ref('carbono/selecao_pwm_linear/value').on('value', snapshot => updateBaterry('selecao_pwm_linear_value', snapshot.val()))
