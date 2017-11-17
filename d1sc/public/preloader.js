var Preloader = {

	preload:function() {

		game.load.image("background","public/assets/background.jpg");
		game.load.image("left-wall","public/assets/left-wall.jpg");
		game.load.image("right-wall","public/assets/right_wall.jpg");
		game.load.image("spikes","public/assets/spikes.png");
		game.load.image("top","public/assets/top.png");
		game.load.image("bottom-grass","public/assets/bottom-grass.png");
		game.load.image("plate","public/assets/plate.png");
		//platform blocks
		game.load.image("block-1","public/assets/block-1.png");
		game.load.image("block-2","public/assets/block-2.png");
		game.load.image("block-3","public/assets/block-3.png");
		game.load.image("block-4","public/assets/block-4.png");
		game.load.image("kill-block","public/assets/kill-block.png");
		//player
		game.load.spritesheet("d1sc","public/assets/d1sc-movement.png", 16, 21, 3);
		game.load.image("d1sc-left","public/assets/d1sc-left.png");
		//gui elements 
		game.load.image("left_arrow","public/assets/left_arrow.png");
		game.load.image("right_arrow","public/assets/right_arrow.png");
		game.load.image("sign_tutorial","public/assets/sign_tutorial.png");
		game.load.image("blur","public/assets/blur.png");
		game.load.image("achiv","public/assets/achiv.png");
		game.load.image("arrowRight","public/assets/arrowRight.png");
		game.load.image("menuOptions","public/assets/menuOptions.png");
		game.load.image("startText","public/assets/startText.png");
		//items
		game.load.image("documentPaper","public/assets/document.png");


	},

	update:function() {

		game.state.start("Game");

	}

}