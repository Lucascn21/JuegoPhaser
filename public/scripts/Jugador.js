import { Entidad } from "./Entidad.js";


export class Jugador extends Entidad {

    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey, 'Player');
        //this.setTexture('gato'); //funciona pero no se si es lo que quiero
        this.setFrame('gato', 1)
        this.setPosition(x, y);
        //this.setScale(3, 3)   //no esta mal ni bien, no se si aporta o quita, too bad!


    }
    preload() {


    }
    create() {

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('gato', { start: 1, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'gato', frame: 9 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('gato', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });


    }


}