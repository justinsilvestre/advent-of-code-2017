function getCircularIndex(listLength, index) {
  return index % listLength
}

module.exports = function knotHash(movementSpansString, listLength = 256) {
  const movementSpans = movementSpansString.trim().split(',').map(Number)
  let currentPosition = 0
  const list = [...Array(listLength).keys()]
  movementSpans.forEach((length, skipSize) => {
    const linearEndIndex = currentPosition + length
    const circularSlice = list.slice(currentPosition, length + currentPosition)
      .concat(linearEndIndex >= listLength
        ? list.slice(0, getCircularIndex(listLength, linearEndIndex))
        : [])

    circularSlice.reverse().forEach((newNumber, i) => {
      list[getCircularIndex(listLength, currentPosition + i)] = newNumber
    })
    currentPosition = getCircularIndex(listLength, currentPosition + length + skipSize)
  })

  return list
}
