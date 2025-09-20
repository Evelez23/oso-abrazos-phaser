// src/scenes/PreloadScene.js
export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Mostrar barra de progreso
        this.createProgressBar();

        // Cargar todos los assets
        this.loadAssets();
    }

    createProgressBar() {
        const width = 400;
        const height = 20;
        const x = (this.sys.game.config.width - width) / 2;
        const y = (this.sys.game.config.height - height) / 2 + 100;

        // Fondo de la barra
        this.add.rectangle(x, y, width, height, 0x666666)
            .setOrigin(0, 0.5);

        // Barra de progreso
        const progressBar = this.add.rectangle(x, y, 0, height, 0x00FF00)
            .setOrigin(0, 0.5);

        // Texto de progreso
        const progressText = this.add.text(
            this.sys.game.config.width / 2,
            y + 30,
            '0%',
            { fontSize: '18px', fill: '#fff' }
        ).setOrigin(0.5);

        // Actualizar progreso
        this.load.on('progress', (value) => {
            progressBar.width = width * value;
            progressText.setText(`${Math.round(value * 100)}%`);
        });
    }

    loadAssets() {
        // Cargar sprites del oso
        this.load.image('oso_idle', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/oso/oso_idle.svg');
        this.load.image('oso_walk', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/oso/oso_walk.svg');
        this.load.image('oso_jump', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/oso/oso_jump.svg');
        this.load.image('oso_hug', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/oso/oso_hugging.svg');
        this.load.image('osoyuni', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/Amigos/osoyuni.png');

        // Cargar amigos
        this.load.image('squirrel', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/Amigos/ardilla.png');
        this.load.image('rabbit', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/Amigos/conejo.png');
        this.load.image('bird', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/Amigos/pajarito.png');
        this.load.image('heart', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/Amigos/lovepower.png');

        // Cargar enemigos
        this.load.image('enemy1', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/enemigos/Enemigos-01.svg');
        this.load.image('enemy2', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/enemigos/Enemigos-02.svg');
        this.load.image('enemy3', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/enemigos/Enemigos-03.svg');

        // Cargar fondos
        this.load.image('forest1', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/fondos/bosque1.jpg');
        this.load.image('forest2', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/fondos/bosque2.jpg');
        this.load.image('forest3', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/img/fondos/bosque3.jpg');

        // Cargar audio
        this.load.audio('background', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/sounds/background.mp3.mp3');
        this.load.audio('jump', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/sounds/jump.mp3.mp3');
        this.load.audio('hug', 'https://raw.githubusercontent.com/Evelez23/-oso.abrazos-/main/sounds/hug.mp3.mp3');
    }

    create() {
        // Ir al menú principal después de cargar
        this.scene.start('MenuScene');
    }
}
