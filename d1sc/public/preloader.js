var Preloader = {

	preload:function() {

		game.load.image("background","../assets/background.jpg");
		game.load.image("left-wall","../assets/left-wall.jpg");
		game.load.image("right-wall","../assets/right_wall.jpg");
		game.load.image("spikes","../assets/spikes.png");
		game.load.image("top","../assets/top.png");
		game.load.image("bottom-grass","../assets/bottom-grass.png");
		game.load.image("plate","../assets/plate.png");
		//platform blocks
		game.load.image("block-1","../assets/block-1.png");
		game.load.image("block-2","../assets/block-2.png");
		game.load.image("block-3","../assets/block-3.png");
		game.load.image("block-4","../assets/block-4.png");
		game.load.image("kill-block","../assets/kill-block.png");
		//player
		game.load.spritesheet("d1sc","../assets/d1sc-movement.png", 16, 21, 3);
		game.load.image("d1sc-left","../assets/d1sc-left.png");
		//gui elements 
		game.load.image("left_arrow","../assets/left_arrow.png");
		game.load.image("right_arrow","../assets/right_arrow.png");
		game.load.image("sign_tutorial","../assets/sign_tutorial.png");
		game.load.image("blur","../assets/blur.png");
		game.load.image("achiv","../assets/achiv.png");
		game.load.image("arrowRight","../assets/arrowRight.png");
		game.load.image("menuOptions","../assets/menuOptions.png");
		game.load.image("startText","../assets/startText.png");
		//items
		game.load.image("documentPaper","../assets/document.png");


	},

	update:function() {

		game.state.start("Game");

	}

}