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

    if (value == 'ATECAO') {
      document.getElementById(id).style.color = '#fec925'
    }

    if (value == 'CRITICO' || value == 'DESATIVADO') {
      document.getElementById(id).style.color = '#fa1e44'
    }

}
    


database.ref('sensors/tensao/value').on('value', snapshot => updateValue('tensao_status', snapshot.val()))
database.ref('sensors/banco_ativo/value').on('value', snapshot => updateValue('banco_status', snapshot.val()))
database.ref('sensors/acoplamento/value').on('value', snapshot => updateValue('acoplamento_status', snapshot.val()))
database.ref('sensors/recarga/value').on('value', snapshot => updateValue('recarga_status', snapshot.val()))
database.ref('sensors/aproximacao/value').on('value', snapshot => updateValue('aproximacao_status', snapshot.val()))
database.ref('sensors/temperatura/data_stream').on('value', snapshot => updateValue('temperatura_value', snapshot.val()))

