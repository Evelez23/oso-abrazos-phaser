// src/classes/Enemy.js
class Oso extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, `enemy${type}`);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.type = type;
        this.direction = -1;
        this.moveCooldown = 0;
        
        // Configurar propiedades según el tipo
        this.setupProperties();
        
        this.setCollideWorldBounds(true);
        this.body.setSize(50, 60);
        this.body.setOffset(5, 5);
    }

    setupProperties() {
        const properties = {
            1: { speed: 80, damage: 1, health: 1 },
            2: { speed: 100, damage: 1, health: 2 },
            3: { speed: 120, damage: 2, health: 1 }
        };

        const props = properties[this.type] || properties[1];
        this.speed = props.speed;
        this.damage = props.damage;
        this.health = props.health;
    }

    update() {
        if (this.moveCooldown > 0) {
            this.moveCooldown--;
            return;
        }

        this.setVelocityX(this.speed * this.direction);

        // Cambiar dirección al llegar a los bordes
        if (this.x <= 50) {
            this.direction = 1;
            this.setFlipX(false);
            this.moveCooldown = 60;
        } else if (this.x >= 750) {
            this.direction = -1;
            this.setFlipX(true);
            this.moveCooldown = 60;
        }
    }

    takeDamage() {
        this.health--;
        this.setTint(0xff0000);
        
        this.scene.time.delayedCall(200, () => {
            this.clearTint();
        });

        return this.health <= 0;
    }
}
