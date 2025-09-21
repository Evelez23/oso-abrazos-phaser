// src/classes/Friend.js
export default class Friend extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type) {
        const textureMap = {
            'squirrel': 'squirrel',
            'rabbit': 'rabbit', 
            'bird': 'bird'
        };
        
        super(scene, x, y, textureMap[type] || 'squirrel');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.type = type;
        this.hugged = false;
        this.floatValue = 0;
        this.floatDir = Math.random() > 0.5 ? 1 : -1;
        
        this.body.setAllowGravity(false);
        this.setImmovable(true);
    }

    update() {
        // Animación de flotación
        this.floatValue += 0.05;
        this.y += Math.sin(this.floatValue) * 0.5 * this.floatDir;
    }

    hug() {
        if (this.hugged) return;
        
        this.hugged = true;
        this.setTint(0x00ff00);
        
        // Efecto de partículas al abrazar
        this.scene.createParticles(this.x, this.y, 10, 0xFF69B4);
        
        return true;
    }
}
