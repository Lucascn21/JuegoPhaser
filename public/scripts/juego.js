import * as escenas from '/scripts/Escenas.js';
var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    //set scenes
    scene: [escenas.Escena1, escenas.Escena2, escenas.Escena3, escenas.Escena4],
    //scene: [],
    scale: {
        //we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: true
        }
    },
};
var game = new Phaser.Game(config);
console.dir(game)
console.dir(config)