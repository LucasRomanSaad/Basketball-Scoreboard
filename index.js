function addPoint(team, points) {
    var scoreElement = document.getElementById(team + '-score');
    var currentScore = parseInt(scoreElement.textContent);
    var newScore = currentScore + points;
    scoreElement.textContent = newScore;
}

function resetScores() {
    document.getElementById('home-score').textContent = '0';
    document.getElementById('away-score').textContent = '0';
}

