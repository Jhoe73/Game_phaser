var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
		//background = this.game.stage.backgroundColor = '#538ad4';

		background = this.game.add.sprite(0, 0, 'background');
		background.scale.setTo(1, 1.4);

		rights = this.game.add.sprite(this.game.world.centerX, 365, 'rights');
		rights.scale.setTo(.2, .15);
		rights.anchor.setTo(0.5, 0);

		logo = this.game.add.sprite(this.game.world.centerX, 15, 'logo');
		logo.anchor.setTo(0.5, 0);

		button_start = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'button_start', this.actionOnClickStart, this);
		button_start.scale.setTo(.5, .5);
		button_start.anchor.setTo(.5, .5);
		button_start.onInputOver.add(this.overStart, this);
		button_start.onInputOut.add(this.outStart, this);
		button_start.onInputUp.add(this.upStart, this);

		//button_sound = this.game.add.button(725, 350, 'button_sound', this.actionOnClickSound, this);
		//button_sound.scale.setTo(.2, .2);

		button_configs = this.game.add.button(725, 325, 'button_configs', this.actionOnClickConfigs, this);
		button_configs.onInputOver.add(this.overConfigs, this);
		button_configs.onInputOut.add(this.outConfigs, this);
		button_configs.onInputUp.add(this.upConfigs, this);
		button_configs.scale.setTo(.30, .30);
	},

	upStart: function() {
		console.log('button_start up', arguments);
	},

	overStart: function() {
		console.log('button_start over');
		button_start.anchor.setTo(.51, .51);
	},

	outStart: function() {
		console.log('button_start out');
		button_start.anchor.setTo(.5, .5);
	},

	upConfigs: function() {
	},

	overConfigs: function() {
		button_configs.anchor.setTo(.01, .01);
	},

	outConfigs: function() {
		button_configs.anchor.setTo(0, 0);
	},

	actionOnClickStart: function() {
		this.playerSelect();
	},

	//actionOnClickSound: function() {
		//alert("Sound");
	//},

	actionOnClickConfigs: function() {
		alert("Config");
	},

	playerSelect: function(){
		this.game.state.start("PlayerSelect");
	}

}