import { Scene } from 'phaser';

import phaserPng from '../assets/logo.png';

export default class MainScene extends Scene {

    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('phaser', phaserPng);
    }

    create() {
        this.image = this.add.image(400, 300, 'phaser');

        this.input.on('pointerdown', (event) => {
            this.image.x = event.x;
            this.image.y = event.y;
        });
    }
}
