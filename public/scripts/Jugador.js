import { Entidad } from "./Entidad.js";


export class Jugador extends Entidad {

    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey, 'Player');
        this.setTexture('gato'); //funciona pero no se si es lo que quiero
        //this.setFrame('gato')
        this.setPosition(x, y);
        //this.setScale(3, 3)   //no esta mal ni bien, no se si aporta o quita, too bad!

        this.setScale(0.5, 0.5);



    }
    preload() {


    }
    create() {





    }
}