
import Phaser from 'phaser'
import MainScene from '@/game/scenes/MainScene'

function launch(containerId) {
    return new Phaser.Game({
        width: 1600,
        height: 900,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        type: Phaser.AUTO,
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