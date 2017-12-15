module.exports = function recursiveCircus(input) {
  const lines = input.trim().split('\n')
  const nodes = lines.reduce((all, line) => {
    const [, name, weight,, afters] = line.match(/(\w+) \((\d+)\)( -> )?(.*)/)
    all[name] = {
      weight: Number(weight),
      afters: afters ? afters.trim().split(/\,\s/) : [],
    }
    return all
  }, {})
  const sortedNames = []
  const visited = new Set()

  function visit(nodeName, ancestors) {
    if (visited.has(nodeName)) return

    const node = nodes[nodeName]
    ancestors.push(nodeName)
    visited.add(nodeName)
    node.afters.forEach((afterNodeName) => {
      visit(afterNodeName, ancestors)
    })

    sortedNames.unshift(nodeName)
  }

  Object.keys(nodes).forEach(nodeName => visit(nodeName, []))
  return sortedNames[0]
}
