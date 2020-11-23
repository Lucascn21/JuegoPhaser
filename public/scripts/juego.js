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
};

function preload() { console.dir(escenas) }

function create() { console.dir(escenas) }

function update() { console.dir(escenas) }
var game = new Phaser.Game(config);