// src/scenes/GameScene.js
import Oso from '../classes/Oso.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    init(data) {
        this.level = data.level || '1-1';
    }

    create() {
        // Crear fondo según el nivel
        this.createBackground();
        
        // Crear plataformas
        this.createPlatforms();
        
        // Crear oso
        this.createOso();
        
        // Crear amigos y enemigos
        this.createFriends();
        this.createEnemies();
        
        // Configurar físicas y colisiones
        this.setupPhysics();
        
        // Configurar controles
        this.setupControls();
        
        // Crear UI
        this.createUI();
        
        // Iniciar música
        this.backgroundMusic = this.sound.add('background', { loop: true });
        if (window.gameState.soundEnabled) {
            this.backgroundMusic.play();
        }
    }

    createBackground() {
        const bgKey = `forest${this.level.split('-')[1]}`;
        this.add.image(400, 300, bgKey).setDisplaySize(800, 600);
    }

    createOso() {
        this.oso = new Oso(this, 100, 400);
    }

    createPlatforms() {
        this.platforms = this.physics.add.staticGroup();
        
        // Plataformas según el nivel
        const platformConfigs = {
            '1-1': [{ x: 400, y: 500, width: 600, height: 20 }],
            '1-2': [{ x: 200, y: 450, width: 200, height: 20 }, 
                    { x: 500, y: 350, width: 200, height: 20 }],
            // ... más configuraciones
        };

        const config = platformConfigs[this.level] || platformConfigs['1-1'];
        
        config.forEach(plat => {
            this.platforms.create(plat.x, plat.y, null)
                .setSize(plat.width, plat.height)
                .setOrigin(0.5, 0.5);
        });

        this.physics.add.collider(this.oso, this.platforms);
    }

    update() {
        if (this.oso) {
            this.oso.update(this.cursors);
        }
    }

    setupControls() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    // ... más métodos para crear amigos, enemigos, UI, etc.
}
