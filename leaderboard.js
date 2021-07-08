const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highScoresList = document.getElementById("highScoresList");

highScoresList.innerHTML = 
    highScores.map( score => {
    return `<div class="scores-list">
            <div class="hs-name">${score.name}</div>
            <div class="hs-score">${score.score}</div>
            </div>`;
    }).join("");