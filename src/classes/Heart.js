// src/classes/Heart.js
export default class Heart extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'heart');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.collected = false;
        this.floatValue = 0;
        
        this.body.setAllowGravity(false);
        this.setImmovable(true);
        this.setScale(0.5);
    }

    update() {
        // Animación de flotación
        this.floatValue += 0.03;
        this.y += Math.sin(this.floatValue) * 0.3;
    }

    collect() {
        if (this.collected) return false;
        
        this.collected = true;
        this.scene.createParticles(this.x, this.y, 15, 0xFF69B4);
        this.destroy();
        
        return true;
    }
}
