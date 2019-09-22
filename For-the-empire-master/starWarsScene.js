function spotEachRebel(rebels) {
  var spottedRebelCalls = []

  for (i = 0; i < rebels.length; i++) {
    spottedRebelCalls.push('Look! Rebel scum!')
  }

  return spottedRebelCalls
}

function seeRebelsEscape(rebels) {
  var escapedRebelCalls = []
  var i = 0

  /*do {
    escapedRebelCalls.push('Oh no! They\'re getting away!')
    i++  old cod  */
  while (rebels[i] && rebels[i]['plotArmor']) {
    escapedRebelCalls.push('Oh no! They\'re getting away!')
    i++
  }

  return escapedRebelCalls
}

function shootAtNothing() {
  var shotsAtNothing = []

  for (var i = 0; i < 4; i++) {
    shotsAtNothing.push('pew')
  }

  return shotsAtNothing
}

module.exports.deliverStormTroopersEscapeScene = function (rebels) {
  var sceneSequence = []
  console.log(rebels)
  var spottedRebelCalls = spotEachRebel(rebels)
  sceneSequence = sceneSequence.concat(spottedRebelCalls)

  var escapedRebelCalls = seeRebelsEscape(rebels)
  sceneSequence = sceneSequence.concat(escapedRebelCalls)

  var shotsAtNothing = shootAtNothing()
  sceneSequence = sceneSequence.concat(shotsAtNothing)

  return sceneSequence
}
