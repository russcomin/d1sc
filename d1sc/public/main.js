let game = new Phaser.Game(375,640,Phaser.AUTO,"");


game.state.add('Preloader',Preloader);
game.state.add('Game', Game);
game.state.start("Preloader");