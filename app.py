from flask import Flask, render_template, jsonify
import random
import time

import busio
import digitalio
import board
import adafruit_mcp3xxx.mcp3008 as MCP
import time
from adafruit_mcp3xxx.analog_in import AnalogIn
import socket  

# create the spi bus
spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)
 
# create the cs (chip select)
cs = digitalio.DigitalInOut(board.D5)
 
# create the mcp object
mcp = MCP.MCP3008(spi, cs)
 
# create an analog input channel on pin 0
chan = AnalogIn(mcp, MCP.P1)

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
    print('Raw ADC Value: ', chan.value >> 6)
    print('ADC Voltage: ' + str(chan.voltage) + 'V')
    res1 = str(chan.voltage)
    res2 = random.random()
    return jsonify(sensor1=res1,sensor2=res2) 

if __name__ == '__main__':
    app.run(debug = True)

