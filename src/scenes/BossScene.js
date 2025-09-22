// src/scenes/BossScene.js
export default class BossScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BossScene' });
    }

    create() {
        this.createBackground();
        this.createBoss();
        this.createOso();
        this.setupPhysics();
        this.setupControls();
        this.createBossUI();
        
        this.bossMusic = this.sound.add('bossBattle', { loop: true });
        if (window.gameState.soundEnabled) {
            this.bossMusic.play();
        }
    }

    createBackground() {
        this.add.image(400, 300, 'forest3').setDisplaySize(800, 600);
    }

    createBoss() {
        // Implementar lógica del jefe aquí
        this.boss = this.add.sprite(600, 300, 'bossPhase1');
        this.bossHealth = 5;
    }

    createOso() {
        this.oso = new Oso(this, 100, 400);
    }

    update() {
        // Lógica de batalla contra el jefe
    }

    bossDefeated() {
        this.bossMusic.stop();
        this.scene.start('VictoryScene');
    }
}
