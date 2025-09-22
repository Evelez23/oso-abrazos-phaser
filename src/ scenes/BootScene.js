class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        this.load.image('loading-bg', 'assets/images/loading-bg.png');
        this.load.image('logo', 'assets/images/logo.png');
    }

    create() {
        this.scene.start('PreloadScene');
    }
}
