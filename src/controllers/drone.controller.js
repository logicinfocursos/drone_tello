// src\controllers\home.controller.js
import dgram from 'dgram'
import dotenv from 'dotenv'

dotenv.config()

export default class DroneController {

    constructor() {
        // Bind this to the methods
        this.takeoff = this.takeoff.bind(this)
        this.emergency = this.emergency.bind(this)
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
        this.land = this.land.bind(this)
        this.right = this.right.bind(this)
        this.left = this.left.bind(this)
        this.flip = this.flip.bind(this)
        this.battery = this.battery.bind(this)
        this.droneSend = this.droneSend.bind(this)
        this.handleError = this.handleError.bind(this)

        this.DRONE_PORT = process.env.DRONE_PORT | 8889
        this.DRONE_HOST = process.env.DRONE_HOST

        const drone = dgram.createSocket('udp4')
        drone.bind(this.DRONE_PORT)

        drone.on('message', message => {
            console.log(`>>> drone on: 🚁 : ${message}`)
        })

        drone.send('command', 0, 7, 8889, '192.168.10.1', this.handleError)
        drone.send('battery?', 0, 8, 8889, '192.168.10.1', this.handleError)

        drone.send('command', 0, 7, 8889, '192.168.10.1', (err) => {
            if (err) {
                console.log('ERROR')
                console.log(err)
            } else {
                console.log('>>> droneSend / command - message sent successfully')
            }
        })

        drone.send('battery?', 0, 8, 8889, '192.168.10.1', (err) => {
            if (err) {
                console.log('ERROR')
                console.log(err)
            } else {
                console.log('>>> droneSend / battery - message sent successfully')
            }
        })

        this.drone = drone

        this.command = ''
        this.battery_charge = this.battery()
        console.log('*** DroneController - constructor - this.battery_charge: ', this.battery_charge)

        if (!this.battery_charge) {
            console.log('Drone sem bateria ou desligado')
        }
    }

    takeoff(req, res) {
        console.log('*** DroneController - takeoff')
        this.command = 'takeoff'
        this.droneSend()
    }

    emergency(req, res) {
        console.log('*** DroneController - emergency')
        this.command = 'emergency'
        this.droneSend()
    }

    up(req, res) {
        console.log('*** DroneController - up: ', req.params.cm)
        this.command = 'up'
        this.droneSend()
    }

    down(req, res) {
        console.log('*** DroneController - down: ', req.params.cm)
        this.command = 'down'
        this.droneSend()
    }

    land(req, res) {
        console.log('*** DroneController - land')
        this.command = 'land'
        this.droneSend()
    }

    right(req, res) {
        console.log('*** DroneController - right: ', req.params.cm)
        this.command = 'right'
        this.droneSend()
    }

    left(req, res) {
        console.log('*** DroneController - left: ', req.params.cm)
        this.command = 'left'
        this.droneSend()
    }

    flip(req, res) {
        console.log('*** DroneController - flip: ', req.params.direction)
        this.command = 'flip'
        this.droneSend()
    }

    battery(req, res) {
        console.log('*** DroneController - battery')
        this.command = 'battery?'
        this.droneSend()
    }

    droneSend() {
       // this.drone.send('command', 0, 7, 8889, '192.168.10.1', this.handleError)

        this.drone.send(this.command, 0, this.command.length, this.DRONE_PORT, this.DRONE_HOST, (err) => {
            if (err) {
                console.log('ERROR')
                console.log(err)
            } else {
                console.log('>>> droneSend - message sent successfully')
            }
        })
    }

    handleError(err) {
        if (err) {
            console.log('ERROR')
            console.log(err)
        }
    }
}