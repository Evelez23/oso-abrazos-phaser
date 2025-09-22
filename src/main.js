const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#87CEEB',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [BootScene, PreloadScene, MenuScene, GameScene, BossScene, VictoryScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

window.gameState = {
    currentLevel: '1-1',
    score: 0,
    lives: 3,
    heartsCollected: 0,
    soundEnabled: true
};
