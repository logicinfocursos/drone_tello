// fly.js
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import router from './src/routes/router.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'src', 'views'))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

router(app)

app.listen(PORT, () =>
    console.log(`Servidor rodando em http://localhost:${PORT}`)
)











/* const drone = dgram.createSocket('udp4')
drone.bind(PORT)

drone.on('message', message => {
    console.log(`🚁 : ${message}`)
}) */

/* function handleError(err) {

    if (err) {
        console.log('ERROR')
        console.log(err)
    }
} */

//cmd = ['command', 'battery?', 'takeoff', 'land', 'streamon', 'streamoff', 'emergency']

//cmd = [{cmd: 'command', arg: 3}, {cmd: 'battery?', delay: 0}, {cmd: 'takeoff', delay: 5000}, {cmd: 'land', delay: 5000}, {cmd: 'streamon', delay: 0}, {cmd: 'streamoff', delay: 0}, {cmd: 'emergency', delay: 0]
/*
const cmd = [
    { action: 'command', arg: "ola" },
    { action: 'takeoff', arg: "ola" },
]
drone.send(cmd.action['command'], 0, cmd['command'].length, PORT, HOST, handleError)
drone.send('battery?', 0, 8, PORT, HOST, handleError)
drone.send('takeoff', 0, 7, PORT, HOST, handleError)

drone.send('streamon', 0, 7, PORT, HOST, handleError)

setInterval(() => {

    drone.send('up 20', 0, 7, PORT, HOST, handleError)
}, 1000)

setInterval(() => {
    drone.send('down 20', 0, 7, PORT, HOST, handleError)
}, 1000)

setInterval(() => {
    drone.send('left 20', 0, 7, PORT, HOST, handleError)
}, 1000)

setInterval(() => {
    drone.send('right 20', 0, 7, PORT, HOST, handleError)
}, 1000)

setInterval(() => {
    drone.send('flip l', 0, 7, PORT, HOST, handleError)
}, 1000)

setInterval(() => {
    drone.send('land', 0, 4, PORT, HOST, handleError)
}, 3000)
*/
