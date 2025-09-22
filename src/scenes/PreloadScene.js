class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        this.createProgressBar();
        this.loadAssets();
    }

    createProgressBar() {
        const width = 400;
        const height = 20;
        const x = (this.sys.game.config.width - width) / 2;
        const y = (this.sys.game.config.height - height) / 2 + 100;

        this.add.rectangle(x, y, width, height, 0x666666).setOrigin(0, 0.5);
        const progressBar = this.add.rectangle(x, y, 0, height, 0x00FF00).setOrigin(0, 0.5);
        const progressText = this.add.text(this.sys.game.config.width / 2, y + 30, '0%', { 
            fontSize: '18px', fill: '#fff' 
        }).setOrigin(0.5);

        this.load.on('progress', (value) => {
            progressBar.width = width * value;
            progressText.setText(`${Math.round(value * 100)}%`);
        });
    }

    loadAssets() {
        const baseUrl = 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main';
        
        // SPRITES DEL OSO
        this.load.image('oso_idle', `${baseUrl}/img/oso/oso_idle.svg`);
        this.load.image('oso_walk', `${baseUrl}/img/oso/oso_walk.svg`);
        this.load.image('oso_jump', `${baseUrl}/img/oso/oso_jump.svg`);
        this.load.image('oso_hug', `${baseUrl}/img/oso/oso_hugging.svg`);
        this.load.image('oso_sit', `${baseUrl}/img/oso/oso_sit.svg`);
        this.load.image('oso_run', `${baseUrl}/img/oso/oso_run.svg`);
        this.load.image('osoyuni', `${baseUrl}/img/Amigos/osoyuni.png`);

        // AMIGOS
        this.load.image('squirrel', `${baseUrl}/img/Amigos/ardilla.png`);
        this.load.image('rabbit', `${baseUrl}/img/Amigos/conejo.png`);
        this.load.image('bird', `${baseUrl}/img/Amigos/pajarito.png`);
        this.load.image('heart', `${baseUrl}/img/Amigos/lovepower.png`);
        this.load.image('unicorn', `${baseUrl}/img/Amigos/unirshup.png`);
        this.load.image('honey', `${baseUrl}/img/Amigos/miel.png`);

        // ENEMIGOS
        this.load.image('enemy1', `${baseUrl}/img/enemigos/Enemigos-01.svg`);
        this.load.image('enemy2', `${baseUrl}/img/enemigos/Enemigos-02.svg`);
        this.load.image('enemy3', `${baseUrl}/img/enemigos/Enemigos-03.svg`);
        this.load.image('boss1', `${baseUrl}/img/enemigos/lobo.svg`);
        this.load.image('boss2', `${baseUrl}/img/enemigos/loboferoz.png`);
        this.load.image('boss3', `${baseUrl}/img/enemigos/lobotriste.png`);
        this.load.image('fire', `${baseUrl}/img/enemigos/fire.png`);

        // FONDOS
        this.load.image('forest1', `${baseUrl}/img/fondos/bosque1.jpg`);
        this.load.image('forest2', `${baseUrl}/img/fondos/bosque2.jpg`);
        this.load.image('forest3', `${baseUrl}/img/fondos/bosque3.jpg`);
        this.load.image('forest4', `${baseUrl}/img/fondos/bosque4.jpg`);

        // AUDIO (placeholders)
        this.load.audio('background', `${baseUrl}/sounds/background.mp3.mp3`);
        this.load.audio('jump', `${baseUrl}/sounds/jump.mp3.mp3`);
        this.load.audio('collect', `${baseUrl}/sounds/collect.mp3.mp3`);
        this.load.audio('hug', `${baseUrl}/sounds/hug.mp3.mp3`);
        this.load.audio('hurt', `${baseUrl}/sounds/hurt.mp3.mp3`);
    }

    create() {
        this.scene.start('MenuScene');
    }
}
