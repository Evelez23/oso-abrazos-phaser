// src/scenes/VictoryScene.js
export default class VictoryScene extends Phaser.Scene {
    constructor() {
        super({ key: 'VictoryScene' });
    }

    create() {
        this.add.image(400, 300, 'forest3').setDisplaySize(800, 600);
        
        this.add.text(400, 200, '¡VICTORIA!', {
            fontSize: '48px',
            fill: '#FFD700',
            stroke: '#000',
            strokeThickness: 6
        }).setOrigin(0.5);
        
        this.add.text(400, 280, `Puntuación final: ${window.gameState.score}`, {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5);
        
        const menuButton = this.add.text(400, 350, 'VOLVER AL MENÚ', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#8B4513',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive();
        
        menuButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}
