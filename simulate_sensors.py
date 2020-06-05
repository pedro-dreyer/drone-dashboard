import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import math

# Fetch the service account key JSON file contents
cred = credentials.Certificate('serviceAccountKey.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://drone-dashboard-d714c.firebaseio.com/'
        })

ref = db.reference('sensors/1')

time = 0
inc = 0.1
while True:
    value = math.sin(time)
    ref.update({'data_stream' : value})
    time += inc
    print(time)
    if time > 2*math.pi:
        time = 0
    
