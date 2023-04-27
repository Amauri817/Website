const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []

for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

class Boundary {
  constructor ({ position }) {
    this.position = position
    this.width = 48
    this.height = 48
  }

  draw () {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const boundaries = []
const offset = {
  x: -1075,
  y: -550
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * 48 + offset.x,
            y: i * 48 + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './Pictures/Pokemon Map.png'

const playerImage = new Image()
playerImage.src = './Pictures/playerDown.png'

class Sprite {
  constructor ({ position, velocity, image }) {
    this.position = position
    this.image = image
  }

  draw () {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

const background = new Sprite({ position: { x: offset.x, y: offset.y }, image: image })

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

function animations () {
  window.requestAnimationFrame(animations)
  background.draw()
  boundaries.forEach(Boundary => {
    Boundary.draw()
  })
  c.drawImage(playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - (playerImage.width / 4) / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  )
  if (keys.w.pressed && LastKey === 'w') { background.position.y = background.position.y + 3 } else if (keys.a.pressed && LastKey === 'a') { background.position.x = background.position.x + 3 } else if (keys.s.pressed && LastKey === 's') { background.position.y = background.position.y - 3 } else if (keys.d.pressed && LastKey === 'd') { background.position.x = background.position.x - 3 }
}
animations()

let LastKey = ''
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true
      LastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      LastKey = 'a'
      break
    case 's':
      keys.s.pressed = true
      LastKey = 's'
      break
    case 'd':
      keys.d.pressed = true
      LastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})
