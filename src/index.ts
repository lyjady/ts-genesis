import './style/index.less'

import GameController from "./module/GameController";

const controller = new GameController()
setInterval(() => console.log(controller.direction), 1000)
