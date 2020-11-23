export class Entidad extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, textureKey, type) {
        super(scene, x, y, textureKey);

        this.scene = scene;
        this.textureKey = textureKey;

        this.type = type;
        this.isDead = false;
        //Fisica
        //this.scene.add.existing(this); //Probablemente no quiera fisicas pero para aprender las estoy usando
        this.scene.physics.world.enableBody(this, 0);
        this.setCollideWorldBounds(true);
        this.body.onWorldBounds = true;
        this.setBounce(1, 1);
    }

    explode() {
        if (!this.isDead) {
            this.isDead = true;
            this.destroy();
            console.log('explotó la entidad')
        }
    }
}