// src\routes\router.js
import HomeController from '../controllers/home.controller.js'
import DroneController from '../controllers/drone.controller.js'

export default function router(app) {
    const homeController = new HomeController()
    const droneController = new DroneController()
    app.get("/", homeController.viewhome)
    app.post("/takeoff", droneController.takeoff)
    app.post("/emergency", droneController.emergency)
    app.post("/battery", droneController.battery)
    app.post("/up/:cm", droneController.up)
    app.post("/down/:cm", droneController.down)
    app.post("/land", droneController.land)
    app.post("/right/:cm", droneController.right)
    app.post("/left/:cm", droneController.left)
    app.post("/flip/:direction", droneController.flip)

}

