// src/scenes/PreloadScene.js
export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        this.createProgressBar();
        this.loadAssets();
    }

    createProgressBar() {
        // ... (código igual que antes)
    }

    loadAssets() {
        // SPRITES DEL OSO - Rutas locales
        this.load.image('oso_idle', 'assets/images/oso/oso_idle.svg');
        this.load.image('oso_walk', 'assets/images/oso/oso_walk.svg');
        this.load.image('oso_jump', 'assets/images/oso/oso_jump.svg');
        this.load.image('oso_hug', 'assets/images/oso/oso_hugging.svg');
        this.load.image('oso_sit', 'assets/images/oso/oso_sit.svg');
        this.load.image('oso_run', 'assets/images/oso/oso_run.svg');
        this.load.image('osoyuni', 'assets/images/oso/osoyuni.png');

        // AMIGOS - Rutas locales
        this.load.image('squirrel', 'assets/images/amigos/ardilla.png');
        this.load.image('rabbit', 'assets/images/amigos/conejo.png');
        this.load.image('bird', 'assets/images/amigos/pajarito.png');
        this.load.image('heart', 'assets/images/amigos/lovepower.png');
        this.load.image('unicorn', 'assets/images/amigos/unirshup.png');
        this.load.image('honey', 'assets/images/amigos/miel.png');

        // ENEMIGOS - Rutas locales
        this.load.image('enemy1', 'assets/images/enemigos/Enemigos-01.svg');
        this.load.image('enemy2', 'assets/images/enemigos/Enemigos-02.svg');
        this.load.image('enemy3', 'assets/images/enemigos/Enemigos-03.svg');
        this.load.image('boss1', 'assets/images/enemigos/lobo.svg');
        this.load.image('boss2', 'assets/images/enemigos/loboferoz.png');
        this.load.image('boss3', 'assets/images/enemigos/lobotriste.png');
        this.load.image('fire', 'assets/images/enemigos/fire.png');

        // FONDOS - Rutas locales
        this.load.image('forest1', 'assets/images/fondos/bosque1.jpg');
        this.load.image('forest2', 'assets/images/fondos/bosque2.jpg');
        this.load.image('forest3', 'assets/images/fondos/bosque3.jpg');
        this.load.image('forest4', 'assets/images/fondos/bosque4.jpg');
        this.load.image('background_1_2', 'assets/images/fondos/background_1_2.jpeg');
        this.load.image('background_final', 'assets/images/fondos/background_final.jpeg');

        // AUDIO - Rutas locales
        this.load.audio('background', 'assets/audio/background.mp3');
        this.load.audio('jump', 'assets/audio/jump.mp3');
        this.load.audio('collect', 'assets/audio/collect.mp3');
        this.load.audio('hug', 'assets/audio/hug.mp3');
        this.load.audio('hurt', 'assets/audio/hurt.mp3');
        this.load.audio('enemy', 'assets/audio/enemy.mp3');
        this.load.audio('powerup', 'assets/audio/powerup.mp3');
        this.load.audio('shot', 'assets/audio/shot.mp3');
        this.load.audio('bossBattle', 'assets/audio/boss_battle.mp3');
        this.load.audio('intro', 'assets/audio/intro.mp3');
    }

    create() {
        this.scene.start('MenuScene');
    }
}
