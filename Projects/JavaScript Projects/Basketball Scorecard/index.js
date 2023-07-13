let homescore = 0
let awayscore = 0

function homeincrementscorebyone()
{
    homescore += 1
    document.getElementById("home-score-btn").innerHTML = homescore
}
function homeincrementscorebytwo()
{
    homescore += 2
    document.getElementById("home-score-btn").innerHTML = homescore
}
function homeincrementscorebythree()
{
    homescore += 3
    document.getElementById("home-score-btn").innerHTML = homescore
}

function awayincrementscorebyone()
{
    awayscore += 1
    document.getElementById("away-score-btn").innerHTML = awayscore
}
function awayincrementscorebytwo()
{
    awayscore += 2
    document.getElementById("away-score-btn").innerHTML = awayscore
}
function awayincrementscorebythree()
{
    awayscore += 3
    document.getElementById("away-score-btn").innerHTML = awayscore
}