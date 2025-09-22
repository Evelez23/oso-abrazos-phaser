class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        this.add.image(400, 300, 'forest1').setDisplaySize(800, 600);
        
        this.add.text(400, 150, 'OSO ABRAZOS', {
            fontSize: '48px',
            fill: '#fff',
            stroke: '#000',
            strokeThickness: 6,
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        const playButton = this.add.text(400, 300, 'JUGAR', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#8B4513',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();
        
        playButton.on('pointerover', () => {
            playButton.setScale(1.1);
            playButton.setBackgroundColor('#A0522D');
        });
        
        playButton.on('pointerout', () => {
            playButton.setScale(1);
            playButton.setBackgroundColor('#8B4513');
        });
        
        playButton.on('pointerdown', () => {
            this.scene.start('GameScene', { level: '1-1' });
        });
    }
}
