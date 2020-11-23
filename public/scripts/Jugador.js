import { Entidad } from "./Entidad.js";


export class Jugador extends Entidad {

    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey, 'Player');
        this.isGato = false; //Recordar sacarlo jaja

    }
    preload() {

    }
    create() {


    }


}