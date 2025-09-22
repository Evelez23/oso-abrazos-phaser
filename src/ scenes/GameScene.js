class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    init(data) {
        this.level = data.level || '1-1';
        this.levelConfig = this.getLevelConfig();
    }

    create() {
        this.createBackground();
        this.createPlatforms();
        this.createOso();
        this.createFriends();
        this.createEnemies();
        this.createHearts();
        this.setupPhysics();
        this.setupControls();
        this.createUI();
        
        this.backgroundMusic = this.sound.add('background', { loop: true });
        if (window.gameState.soundEnabled) {
            this.backgroundMusic.play();
        }
    }

    createOso() {
        this.oso = new Oso(this, 100, 400);
        this.physics.add.collider(this.oso, this.platforms);
    }

    createFriends() {
        this.friends = this.physics.add.group();
        const friendTypes = ['squirrel', 'rabbit', 'bird'];
        
        for (let i = 0; i < this.levelConfig.friends; i++) {
            const type = friendTypes[i % friendTypes.length];
            const friend = new Friend(this, Phaser.Math.Between(150, 700), Phaser.Math.Between(100, 400), type);
            this.friends.add(friend);
        }
    }

    createEnemies() {
        this.enemies = this.physics.add.group();
        
        for (let i = 0; i < this.levelConfig.enemies; i++) {
            const enemyType = Phaser.Math.Between(1, 3);
            const enemy = new Enemy(this, Phaser.Math.Between(200, 600), 400, enemyType);
            this.enemies.add(enemy);
        }
        
        this.physics.add.collider(this.enemies, this.platforms);
    }

    createHearts() {
        this.hearts = this.physics.add.group();
        
        for (let i = 0; i < this.levelConfig.hearts; i++) {
            const heart = new Heart(this, Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 300));
            this.hearts.add(heart);
        }
    }
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
