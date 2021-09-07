
import Phaser from 'phaser'
import MainScene from '@/game/scenes/MainScene'

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 1600,
        height: 900,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        parent: containerId,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [MainScene]
    })
}

export default launch
export { launch }