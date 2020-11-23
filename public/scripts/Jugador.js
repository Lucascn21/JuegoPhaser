import { Entidad } from "./Entidad.js";


export class Jugador extends Entidad {

    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey, 'Player');
        this.setTexture('wolf');
        this.setPosition(x, y);
        this.setScale(3, 3)
            //this.setBounce(0.2);
            //this.setCollideWorldBounds(true);

    }
    preload() {


    }
    create() {



    }


}