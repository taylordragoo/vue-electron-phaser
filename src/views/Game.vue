<template>
  <ion-phaser
      v-bind:game.prop="game"
      v-bind:initialize.prop="initialize"
  />
</template>

<script>
import Phaser from 'phaser'
export default {
  name: 'HelloWorld',
  data() {
    return {
      initialize: true,
      game: {
        width: 1600,
        height: 900,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        type: Phaser.AUTO,
        scene: {
          init: function() {
            this.cameras.main.setBackgroundColor('#24252A')
          },
          create: function() {
            this.helloWorld = this.add.text(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "Hello World", {
                  font: "40px Arial",
                  fill: "#ffffff"
                }
            );
            this.helloWorld.setOrigin(0.5);
          },
          update: function() {
            this.helloWorld.angle += 1;
          }
        }
      }
    }
  },
  mount() {
    this.game = {}
  }
}
</script>