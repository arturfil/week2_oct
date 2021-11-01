const myObstacles = [];

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  score: function() {
    const points = Math.floor(this.frames/5);
    this.context.font = '18px serif';
    this.context.fillStyle = "black";
    this.context.fillText(`Score ${points}`, 350, 50);
  }
}

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  // TODO: updateObstacles
  // checkGameOver();
  myGameArea.score();
}

function checkGameOver() {
  const crashed = false;
  // TODO: handle myObstacles array
  if (crashed) {
    myGameArea.stop();
  }
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return (
      this.bottom() > obstacle.top() ||
      this.top() < obstacle.bottom() ||
      this.left() < obstacle.right() || 
      this.right() > obstacle.left()
    )
  }
}

const player = new Component(30, 30, 'red', 0, 110);

// call game start()
myGameArea.start();
console.log(player.x);