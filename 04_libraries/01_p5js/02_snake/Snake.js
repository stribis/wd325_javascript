class Snake {

  constructor () {
    this.x = 0
    this.y = 0

    this.xspeed = 1
    this.yspeed = 0
  }

  show () {
    fill(0, 255, 0)
    square(this.x, this.y, cell)
  }

  update () {
    this.x = this.x + this.xspeed * cell
    this.y = this.y + this.yspeed * cell

    this.x = constrain(this.x, 0, width - cell)
    this.y = constrain(this.y, 0, height - cell)


  }

  dir (x, y) {
    this.xspeed = x
    this.yspeed = y
  }

  eat (pos) {
    let d = dist(this.x,  this.y, pos.x, pos.y)
    if (d < 1) {
      // The snake ate an apple
      // Score + 1
      // Generate new fruit
      return true
    } else {
      // Don't generate new fruit
      return false
    }
  }


}


