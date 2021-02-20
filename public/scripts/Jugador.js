import { Entidad } from "./Entidad.js";



export class Jugador extends Entidad {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //Movimiento
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        this.keys = this.scene.input.keyboard.addKeys('W,S,A,D', false, true);
        this.keys.W.on('down', function(event) {
            playerVelocity.y = -1;
            setVelocidad(playerVelocity);
        });

        this.keys.A.on('down', function(event) {
            playerVelocity.x = -1;
            setVelocidad(playerVelocity);
        });

        this.keys.S.on('down', function(event) {
            playerVelocity.y = 1;
            setVelocidad(playerVelocity);
        });
        this.keys.D.on('down', function(event) {
            playerVelocity.x = 1;
            setVelocidad(playerVelocity);
        });

        //funcion que me normaliza el vector y lo resetea
        const setVelocidad = (playerVelocity) => {
            playerVelocity.normalize();
            playerVelocity.scale(speed);
            scene.scene.jugador.setVelocity(playerVelocity.x, playerVelocity.y)
            playerVelocity.reset();
        }

        //Fin Movimiento
    }

    preload() {



    }
    create() {




    }
    update() {


    }
}