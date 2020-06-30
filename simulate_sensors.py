import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import math
import requests
import json 
import time 

# Fetch the service account key JSON file contents
cred = credentials.Certificate('serviceAccountKey.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://drone-dashboard-d714c.firebaseio.com/'
        })

ref = db.reference('sensors')

def get_temperature(api_key, city):
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    complete_url = base_url + "appid=" + api_key + "&q=" + city 
    response = requests.get(complete_url) 
    json_data = response.json() 
    return json_data["main"]["temp"] 

clock = 0
while True:
    time.sleep(1)
    
    print(clock)
    if (clock % 12 == 0):
        temp_val = get_temperature('bc9ef31c4b85286981540a52a2304c50', 'Recife') 
        ref.update({'temperatura/data_stream' : temp_val})

    if (clock % 12 == 0):
        ref.update({'aproximacao/value' : 'NORMAL'})
        ref.update({'tensao/value' : 'NORMAL'})
    elif (clock % 12 == 4):
        ref.update({'aproximacao/value' : 'ATENÇÃO'})
        ref.update({'tensao/value' : 'ATENÇÃO'})
    elif (clock % 12 == 8):
        ref.update({'aproximacao/value' : 'CRITICO'})
        ref.update({'tensao/value' : 'CRITICO'})


    if (clock % 12 == 0):
        ref.update({'recarga/value' : 'SELETOR I'})
        ref.update({'acoplamento/value' : 'ATIVO'})
        ref.update({'banco_ativo/value' : 'BANCO 1'})

    elif (clock % 12 == 6):
        ref.update({'recarga/value' : 'SELETOR II'})
        ref.update({'acoplamento/value' : 'DESATIVADO'})
        ref.update({'banco_ativo/value' : 'BANCO 2'})   
    clock+=1
