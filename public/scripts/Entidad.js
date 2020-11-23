export class Entidad extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, textureKey, type) {
        super(scene, x, y, textureKey);

        this.scene = scene;
        this.textureKey = textureKey;
        //this.scene.add.existing(this); Para que funcionen, hay que cambiar unos parametros del engine, sino da error. Ver try1.
        //this.scene.physics.world.enableBody(this, 0);
        this.type = type;
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