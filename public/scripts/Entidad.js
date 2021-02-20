export class Entidad extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);


        this.isDead = false;

    }

    explode() {
        if (!this.isDead) {
            this.isDead = true;
            this.destroy();
            console.log('explotó la entidad')
        }
    }
}