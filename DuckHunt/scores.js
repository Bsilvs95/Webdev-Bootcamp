function displayScores() {
  var table = document.getElementById('scores')

  scores.forEach(function (scoreEntry) {
    var place = document.createElement('td')
    var initials = document.createElement('td')
    var score = document.createElement('td')

    place.className = 'place'
    initials.className = 'initials'
    score.className = 'score'

    place.innerHTML = scoreEntry.place
    initials.innerHTML = scoreEntry.initials
    score.innerHTML = scoreEntry.score

    var row = document.createElement('tr')
    row.appendChild(place)
    row.appendChild(initials)
    row.appendChild(score)

    table.appendChild(row)
  })
}
