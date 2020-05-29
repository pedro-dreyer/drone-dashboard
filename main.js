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


function updateValue(value){
    document.getElementById('temperatura').innerHTML =value
}

database.ref('sensors/1/data_stream').on('value', snapshot => updateValue(snapshot.val()))
console.log('a')