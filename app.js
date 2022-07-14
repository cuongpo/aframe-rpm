
//import './index.css'
import './three.js'

import {avatarMoveComponent, swapCamComponent, avatarRecenterComponent} from './components/components.js'
AFRAME.registerComponent('avatar-move', avatarMoveComponent)
AFRAME.registerComponent('avatar-recenter', avatarRecenterComponent)
AFRAME.registerComponent('swap-camera', swapCamComponent())
import {responsiveImmersiveComponent} from './components/responsive-immersive.js'
AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)
import {receiveMessage} from './avatar/avatar-instantiate.js'
window.addEventListener('message', receiveMessage, false)
import {avatarFaceComponent} from './avatar/avatar-face-effects.js'
const registerComponents = components => Object.keys(components).map(k => AFRAME.registerComponent(k, components[k]))
registerComponents(avatarFaceComponent())
import {animationRigComponent} from './avatar/rig-animation.js'
AFRAME.registerComponent('rig-animation', animationRigComponent)

