import { Jugador } from '/scripts/Jugador.js';
export class Escena1 extends Phaser.Scene {

    constructor() {
        super({
            key: 'Escena1'

        });

    }

    preload() { /*preload media for GameScene here*/
        this.load.image("terrain", "./assets/images/terrain_atlas.png");

        this.load.tilemapTiledJSON("mapa", "./assets/maps/mapa.json");

    }


    create() {
        var gs2 = this.add.text(0, 0, 'Escena1');
        var mainbtn = this.add.text(0, 50, 'main menu');
        var txt2 = this.add.text(0, 100, 'next');

        txt2.setInteractive().on('pointerdown', function() {

            this.scene.scene.start('Escena2');
        });
        mainbtn.setInteractive().on('pointerdown', function() {
            this.scene.scene.start('Escena1');

        });
        //Mapa
        let mappy = this.add.tilemap("mapa");

        let terrain = mappy.addTilesetImage("terrain_atlas", "terrain");

        //layers
        let baseLayer = mappy.createStaticLayer("base", [terrain], 0, 0).setDepth(-1);
        let vegetacionLayer = mappy.createStaticLayer("vegetacion", [terrain], 0, 0);
        let vegetacion2Layer = mappy.createStaticLayer("vegetacion2", [terrain], 0, 0);

        //Player
        this.jugador = new Jugador(this.matter.world, 264, 250, 'none', 'none')
        console.dir(this.jugador)

    }

    update(time, delta) {


    }
}
export class Escena2 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Escena2'
        });

    }
    preload() { /*preload media for GameScene here*/ }


    create() {
        var gs2 = this.add.text(0, 0, 'Escena2');
        var mainbtn = this.add.text(0, 50, 'main menu');
        var txt2 = this.add.text(0, 100, 'next');
        mainbtn.setInteractive().on('pointerdown', function() {
            this.scene.scene.start('Escena1');

        });
    }

    update(time, delta) {

    }
}
export class Escena3 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Escena3'
        });

    }
    preload() { /*preload media for GameScene here*/ }


    create() {}

    update(time, delta) {}
}
export class Escena4 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Escena4'
        });

    }

    preload() { /*preload media for GameScene here*/ }


    create() {}

    update(time, delta) {}
}