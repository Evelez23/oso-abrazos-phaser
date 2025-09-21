// src/classes/Oso.js
export default class Oso extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'oso_idle');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Propiedades del oso
        this.setCollideWorldBounds(true);
        this.setBounce(0.2);
        this.body.setSize(60, 70);
        this.body.setOffset(10, 10);

        // Variables de estado
        this.hugging = false;
        this.hasUnicorn = false;
        this.invincible = false;
        this.direction = 1;

        // Configurar animaciones
        this.createAnimations();
    }

    createAnimations() {
        this.anims.create({
            key: 'idle',
            frames: [{ key: 'oso_idle' }],
            frameRate: 10
        });

        this.anims.create({
            key: 'walk',
            frames: [{ key: 'oso_walk' }],
            frameRate: 10
        });

        this.anims.create({
            key: 'jump',
            frames: [{ key: 'oso_jump' }],
            frameRate: 10
        });

        this.anims.create({
            key: 'hug',
            frames: [{ key: 'oso_hug' }],
            frameRate: 10,
            repeat: 0
        });
    }

    update(cursors) {
        if (this.hugging) return;

        // Movimiento horizontal
        if (cursors.left.isDown) {
            this.setVelocityX(-160);
            this.direction = -1;
            this.anims.play('walk', true);
            this.setFlipX(true);
        } else if (cursors.right.isDown) {
            this.setVelocityX(160);
            this.direction = 1;
            this.anims.play('walk', true);
            this.setFlipX(false);
        } else {
            this.setVelocityX(0);
            this.anims.play('idle', true);
        }

        // Salto
        if (cursors.up.isDown && this.body.touching.down) {
            this.setVelocityY(-330);
            this.scene.sound.play('jump');
        }

        // Abrazo
        if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.hug();
        }
    }

    hug() {
        this.hugging = true;
        this.setVelocityX(0);
        this.anims.play('hug', true);
        this.scene.sound.play('hug');

        // Restablecer después de la animación
        this.on('animationcomplete', () => {
            this.hugging = false;
            this.anims.play('idle', true);
        }, this);
    }

    takeDamage() {
        if (this.invincible) return;

        this.invincible = true;
        this.setTint(0xff0000);

        this.scene.time.delayedCall(1000, () => {
            this.invincible = false;
            this.clearTint();
        });
    }
}
