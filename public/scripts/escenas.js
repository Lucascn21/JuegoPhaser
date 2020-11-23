import { Jugador } from '/scripts/Jugador.js';
export class Escena1 extends Phaser.Scene {

    constructor() {
        super({
            key: 'Escena1'

        });

    }

    preload() { /*preload media for GameScene here*/
        this.load.image('wolf', 'assets/images/wolf.png');
    }


    create() {
        // this.jugador = new Jugador(this) //not sure
        //console.dir(this.jugador) //not sure
        var gs2 = this.add.text(0, 0, 'Escena1');
        var mainbtn = this.add.text(0, 50, 'main menu');
        var txt2 = this.add.text(0, 100, 'next');

        txt2.setInteractive().on('pointerdown', function() {

            this.scene.scene.start('Escena2');
        });
        mainbtn.setInteractive().on('pointerdown', function() {
            this.scene.scene.start('Escena1');

        });
        var player = this.add.existing(new Jugador(this, 264, 250));
        //var player = this.physics.add.sprite(100, 450, 'wolf');

    }

    update(time, delta) {}
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

    update(time, delta) {}
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