from flask import Flask, render_template, jsonify
import random
import time

app = Flask(__name__)

from flask import render_template


@app.route('/')
def index():
     return render_template("index.html")

@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")

@app.route('/sensors')
def sensors():
    return render_template("sensors.html")

@app.route('/ret_num', methods = ['POST', 'GET'])
def ret_num():
    res1 = random.random()
    res2 = random.random()
    return jsonify(sensor1=res1,sensor2=res2) 

if __name__ == '__main__':
    app.run(debug = True)

