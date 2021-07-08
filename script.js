const dice = [1, 2, 3, 4, 5];

let totalScore = 0;

let rollsCount = document.getElementById("rolls").innerHTML=parseInt(document.getElementById("rolls").innerHTML);

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const topScores = 10;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

function gameOver() {
    document.getElementById("game-over").classList.remove("hide");
    document.getElementById("game-container").classList.add("hide");
    document.querySelector("#final-score").innerHTML = totalScore;
    localStorage.setItem("mostRecentScore", totalScore);
    Array.from(document.querySelectorAll(".highlight")).forEach(function(element) {
        element.classList.remove("highlight");
    });
}

function startGame() {
   document.getElementById("game-container").classList.remove("hide");
   document.getElementById("intro-screen").classList.add("hide");
}

function rollDice() {

Array.from(document.querySelectorAll(".highlight")).forEach(function(element) {
    element.classList.remove("highlight");
});

document.getElementById("score").classList.remove("stars");

document.getElementById("rolls").innerHTML=parseInt(document.getElementById("rolls").innerHTML)-1;

rollsCount--;

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomNumber3 = Math.floor(Math.random() * 6) + 1;
const randomNumber4 = Math.floor(Math.random() * 6) + 1;
const randomNumber5 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/cat" + randomNumber1 + ".jpg");
document.querySelector(".img2").setAttribute("src", "images/cat" + randomNumber2 + ".jpg");
document.querySelector(".img3").setAttribute("src", "images/cat" + randomNumber3 + ".jpg");
document.querySelector(".img4").setAttribute("src", "images/cat" + randomNumber4 + ".jpg");
document.querySelector(".img5").setAttribute("src", "images/cat" + randomNumber5 + ".jpg");

let dice = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];

const scoreYeedzee = (currentValue) => currentValue === 5;
const scoreJonahSal = (currentValue) => currentValue === 2 || currentValue === 3;
const scoreCookieBing = (currentValue) => currentValue === 4 || currentValue === 6;
const scoreSally = (currentValue) => currentValue === 3;
const scoreJonah = (currentValue) => currentValue === 2;
const scoreYeedo = (currentValue) => currentValue === 5;
const scoreCookie = (currentValue) => currentValue === 6;
const scoreBing = (currentValue) => currentValue === 4;
const scoreMau = (currentValue) => currentValue === 1;


    if (dice.every(scoreYeedzee)) {
    setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
    document.querySelector(".yeedzee").classList.toggle("highlight");
    document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+300;
    totalScore += 300;
    } else if (dice.every(scoreJonahSal)) {
        setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
        document.querySelector(".jonah-sal").classList.toggle("highlight");
        document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+100;
        totalScore += 100;
        } else if (dice.every(scoreCookieBing)) {
            setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
            document.querySelector(".cookie-bing").classList.toggle("highlight");
            document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+100;
            totalScore += 100;
            } else if (dice.filter(scoreSally).length >= 3) {
                    setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
                    document.querySelector(".sally").classList.toggle("highlight");
                    document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+25;
                    totalScore += 25;
                    } else if (dice.filter(scoreJonah).length >= 3) {
                        setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
                        document.querySelector(".jonah").classList.toggle("highlight");
                        document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+25;
                        totalScore += 25;
                        } else if (dice.filter(scoreYeedo).length >= 3) {
                            setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
                            document.querySelector(".yeedo").classList.toggle("highlight");
                            document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+25;
                            totalScore += 25;
                            } else if (dice.filter(scoreBing).length >= 3) {
                                setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
                                document.querySelector(".bing").classList.toggle("highlight");
                                document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+25;
                                totalScore += 25;
                                } else if (dice.filter(scoreCookie).length >= 3) {
                                    setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
                                    document.querySelector(".cookie").classList.toggle("highlight");
                                    document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+25;
                                    totalScore += 25;
                                    } else if (dice.filter(scoreMau).length >= 3) {
                                        setTimeout(function(){document.getElementById("score").classList.add("stars")}, 300);
                                        document.querySelector(".mau").classList.toggle("highlight");
                                        document.getElementById("score-points").innerHTML=parseInt(document.getElementById("score-points").innerHTML)+25;
                                        totalScore += 25;
                                        }

    if (rollsCount === 0) {
        document.getElementById("roll-button").disabled = true;
        setTimeout(function(){gameOver()}, 3000);
    }
}

saveHighScore = e => {
    e.preventDefault();

    const mostRecentScore = localStorage.getItem("mostRecentScore");

    const newScore = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(newScore);
    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
}