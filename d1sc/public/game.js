let spikes,
 counter,
 kill_block,
 plate,
 d1sc,
 box_1,
 box_2,
 box_3,
 box_4,
 cursors,
 left,
 right,
 left_button = false,
 right_button = false,
 right_wall,
 left_wall,
 achiv,
 play,
 menu,
 main,
 documentPaper,
 startText,
 sign_tutorial;

var Game = {

	create:function() {

		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.background = game.add.sprite(0, 0, 'background');	

		spikes = game.add.sprite(0, 608, 'spikes');
		game.physics.arcade.enable(spikes);
		spikes.body.immovable = true;

		// walls 
		left_wall = game.add.sprite(0, 0, 'left-wall');
		game.physics.arcade.enable(left_wall);
		left_wall.body.immovable = true;
		right_wall = game.add.sprite(359, 0, 'right-wall');
		game.physics.arcade.enable(right_wall);
		right_wall.body.immovable = true;
			
		//grass
		this.top_grass = game.add.sprite(0, 0, 'top');
		this.bottom_grass = game.add.sprite(0, 620, 'bottom-grass');

		box_1 = game.add.sprite(16, 97, 'block-1');
			game.physics.arcade.enable(box_1);
			box_1.body.immovable = true;

		box_2 = game.add.sprite(263, 192, 'block-2');
			game.physics.arcade.enable(box_2);
			box_2.body.immovable = true;
			
		box_3 = game.add.sprite(200, 288, 'block-3');
			game.physics.arcade.enable(box_3);
			box_3.body.immovable = true;
			
		box_4 = game.add.sprite(16, 384, 'block-4');
			game.physics.arcade.enable(box_4);
			box_4.body.immovable = true;

		kill_block = game.add.sprite(295, 
			372, 
			'kill-block');
		game.physics.arcade.enable(kill_block);
		kill_block.body.immovable = true;

		plate = game.add.sprite(201, 495, 'plate');
		game.physics.arcade.enable(plate); plate.body.immovable = true;

		d1sc = game.add.sprite(50, 40,'d1sc');
		game.physics.arcade.enable(d1sc);
		d1sc.body.gravity.y = 1200;
		d1sc.body.collideWorldBounds = true;		
		d1sc.body.velocity.x = 0;
		d1sc.body.bounce.y = 0.1;
		d1sc.animations.add('right', [0,1], 2, true);
		d1sc.animations.add('left', [2,3], 2, true);
		d1sc.animations.play('right');

		left = game.add.sprite(40,
			540,
			'left_arrow'
			);

		left.inputEnabled = true;
		left.events.onInputDown.add(function(){ d1sc.body.velocity.x = -125; left.alpha = .5; d1sc.animations.play('left'); });
    	left.events.onInputUp.add(function(){ d1sc.body.velocity.x = 0; left.alpha = 1;});

		right = game.add.sprite(283,
			540,
			'right_arrow'
			);


		right.inputEnabled = true;
		right.events.onInputDown.add(function(){ d1sc.body.velocity.x = 125; right.alpha = .5; d1sc.animations.play('right'); });
    	right.events.onInputUp.add(function(){ d1sc.body.velocity.x = 0; right.alpha = 1; });

    	documentPaper = game.add.sprite(222, 450, 'documentPaper');
    	this.moveDocument = game.add.tween(documentPaper).to({y:445}, 1000,
    		Phaser.Easing.Linear.None, true, 0, 1000, true
    		); game.physics.arcade.enable(documentPaper); 

    	cursors = game.input.keyboard.createCursorKeys();

	},

	update:function() {

		this.restart = game.input.keyboard.addKey(Phaser.Keyboard.R);

		if (this.restart.isDown) {
			game.state.start("Game");
		}

			// Player collide with side walls
			game.physics.arcade.collide(d1sc, left_wall);
			game.physics.arcade.collide(d1sc, right_wall);
			// Player collide with platforms
			game.physics.arcade.collide(d1sc, box_1);
			game.physics.arcade.collide(d1sc, box_2);
			game.physics.arcade.collide(d1sc, box_3);
			game.physics.arcade.collide(d1sc, box_4);
			// Player collide with objects
			game.physics.arcade.collide(d1sc, plate, startTutorial);	
			game.physics.arcade.collide(d1sc, kill_block, killedBlock);	
			game.physics.arcade.collide(d1sc, spikes, killedBlock);	
			game.physics.arcade.overlap(d1sc, documentPaper, collectDocument);

			function startTutorial() {
				sign_tutorial = game.add.group();
				main = sign_tutorial.create(game.world.centerX, game.world.centerY, 'sign_tutorial');
				main.anchor.setTo(0.5,0.5);
				achiv = sign_tutorial.create(game.world.centerX-40, 406, 'achiv');
				achiv.anchor.setTo(0.5,0.5);
				play = sign_tutorial.create(game.world.centerX, 406, 'arrowRight');
				play.anchor.setTo(0.5,0.5);
				play.inputEnabled = true;
				play.events.onInputDown.add(levelCompleted, this);
				menu = sign_tutorial.create(game.world.centerX+40, 406, 'menuOptions');
				menu.anchor.setTo(0.5,0.5);
				startText = sign_tutorial.create(game.world.centerX, 366, 'startText');
				startText.anchor.setTo(0.5, 0);
				startText.inputEnabled = true;
				startText.events.onInputDown.add(levelCompleted, this);
			}

			function levelCompleted() {
				game.state.start("Game");
			}

			function killedBlock () {
				d1sc.body.velocity.x = 0;
				d1sc.body.gravity.y = -200;
				game.state.start("Game");
			}

			function collectDocument() {
				documentPaper.visible = false;
			}

		}			
}	