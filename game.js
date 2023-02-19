class mainScene {
  preload() {
    this.load.image('player', 'assets/player.png');

    this.load.image('croissant', 'assets/croissant.png');

    this.load.image('bomb1', 'assets/bomb.png');
    this.load.image('bomb2', 'assets/bomb.png');
    this.load.image('bomb3', 'assets/bomb.png');
    this.load.image('bomb4', 'assets/bomb.png');
    this.load.image('bomb5', 'assets/bomb.png');

  }
  
  bomb(bombnum) {
    if (this.started) {
      var audio = new Audio("./assets/soundfx/explosion.mp3");
      audio.play();
      bombnum.destroy(true);
      setTimeout(function(){alert("Game Over!"); location.reload()},50)
    }
  }

  hit() {
    var audio = new Audio("./assets/soundfx/croissant_sound.mp3");
    audio.play();
    
    if (this.started) {
      this.score += 10;
      this.scoreText.setText('score: ' + this.score);
    }
    
    this.croissant.x = Phaser.Math.Between(100, 600);
    this.croissant.y = Phaser.Math.Between(100, 300);
  }
  
  create() {
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.player.setDisplaySize(50,50)
    
    this.croissant = this.physics.add.sprite(300, 300, 'croissant');
    this.croissant.setDisplaySize(35,35)

    this.bomb1 = this.physics.add.sprite(Phaser.Math.Between(100, 600), Phaser.Math.Between(100, 300), 'bomb1');
    this.bomb1.setDisplaySize(35,35)
    this.bomb2 = this.physics.add.sprite(Phaser.Math.Between(100, 600), Phaser.Math.Between(100, 300), 'bomb1');
    this.bomb2.setDisplaySize(35,35)
    this.bomb3 = this.physics.add.sprite(Phaser.Math.Between(100, 600), Phaser.Math.Between(100, 300), 'bomb1');
    this.bomb3.setDisplaySize(35,35)
    this.bomb4 = this.physics.add.sprite(Phaser.Math.Between(100, 600), Phaser.Math.Between(100, 300), 'bomb1');
    this.bomb4.setDisplaySize(35,35)
    this.bomb5 = this.physics.add.sprite(Phaser.Math.Between(100, 600), Phaser.Math.Between(100, 300), 'bomb1');
    this.bomb5.setDisplaySize(35,35)
    
    this.score = 0;
    this.started = false;
    
    let style = { font: '20px Arial', fill: '#fff' };
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    this.arrow = this.input.keyboard.createCursorKeys();
  }
  
  update() {
    if (this.arrow.right.isDown) {
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      this.player.x -= 3;
    } 

    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    }

    if (!this.started) {
      this.started = true;
    } else if (this.physics.overlap(this.player, this.croissant)) {
      this.hit();
    } else if (this.physics.overlap(this.player, this.bomb1)) {
      this.bomb(this.bomb1);
    } else if (this.physics.overlap(this.player, this.bomb2)) {
      this.bomb(this.bomb2);
    } else if (this.physics.overlap(this.player, this.bomb3)) {
      this.bomb(this.bomb3);
    } else if (this.physics.overlap(this.player, this.bomb4)) {
      this.bomb(this.bomb4);
    } else if (this.physics.overlap(this.player, this.bomb5)) {
      this.bomb(this.bomb5);
    }

  }
}

new Phaser.Game({
  width: 700, 
  height: 400, 
  backgroundColor: '#3498db', 
  scene: mainScene, 
  physics: { default: 'arcade' }, 
  parent: 'game', 
});
