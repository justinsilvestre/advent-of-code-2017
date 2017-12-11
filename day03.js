const DIRECTIONS = {
  right: [1, 0], // turn when x > bottomRightCorner.x
  top: [0, -1],  // turn when y < topRightCorner.y
  left: [-1, 0], // turn when x < topLeftCorner.x
  down: [-0, 1], // turn when y > bottomLeftCorner.y
}
const NEXT_DIRECTION_KEY = {
  right: 'top',
  top: 'left',
  left: 'down',
  down: 'right',
}

const TURN_CHECKS = {
  right: ([x], [cornerX]) => x > cornerX,
  top: ([, y], [, cornerY]) => y < cornerY,
  left: ([x], [cornerX]) => x < cornerX,
  down: ([, y], [, cornerY]) => y > cornerY,
}
const isTurnDue = (directionKey, coordinates, cornerCoordinates) =>
  TURN_CHECKS[directionKey](coordinates, cornerCoordinates)

module.exports = function spiralMemory(rawInput) {
  const input = Number(rawInput.trim())
  let coordinates = [0, 0]
  let directionKey = 'right'
  let corners = {
    right: [0, 0], // bottom right
    top: [0, 0],
    left: [0, 0],
    down: [0, 0],
  }
  for (let index = 1; index < input; index++) {
    const [dx, dy] = DIRECTIONS[directionKey]
    const [oldX, oldY] = coordinates
    coordinates = [oldX + dx, oldY + dy]

    if (isTurnDue(directionKey, coordinates, corners[directionKey])) {
      const corner = corners[directionKey]
      corner[0] = coordinates[0]
      corner[1] = coordinates[1]
      directionKey = NEXT_DIRECTION_KEY[directionKey]
    }
  }

  const [x, y] = coordinates
  return Math.abs(x) + Math.abs(y)
}
