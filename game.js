class mainScene {
    preload() {
      this.load.image('player', 'assets/player.png');
      this.load.image('croissant', 'assets/croissant.png');
    }
    create() {
      this.player = this.physics.add.sprite(100, 100, 'player');
      this.player.setDisplaySize(50,50)
      this.croissant = this.physics.add.sprite(300, 300, 'croissant');
      this.croissant.setDisplaySize(35,35)
      this.score = 0;
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