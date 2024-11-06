let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

let totalScoreHome = 0
let totalScoreGuest = 0

function addHomeTeamPointAndPrint(point){
    totalScoreHome += point
    scoreHomeEl.textContent = totalScoreHome
}

function addGuestTeamPointAndPrint(point){
    totalScoreGuest += point
    scoreGuestEl.textContent = totalScoreGuest
}

function addScore(cmnd, point){
    if(cmnd == "home"){
       addHomeTeamPointAndPrint(point)
    }else if(cmnd == "guest"){
        addGuestTeamPointAndPrint(point)
    }
    
}