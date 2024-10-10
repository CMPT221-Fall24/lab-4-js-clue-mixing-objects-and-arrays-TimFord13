let display = document.querySelector(".dis")
let revealButton = document.querySelector(".reveal")

let suspectsArray = ['Professor Plum', 'Miss Scarlett', 'Colonel Mustard', 'Mrs. Peacock', 'Mr. Green', 'Dr. Orchid']
let weaponsArray = ['candlestick', 'wrench', 'lead pipe', 'rope', 'dagger', 'revolver', 'poison','baseball bat']
let roomsArray = ['hall', 'study', 'ballroom', 'billiards room', 'dining room', 'kitchen', 'lounge', 'conservatory', 'library', 'bedroom']

let finalDisplay
let mystery = {}


revealButton.addEventListener("click", ()=>{
    let mysteryObj = pickMystery()
    revealMystery(mysteryObj)
})

function selectRandom(arr){
    return arr[Math.floor((Math.random() * arr.length))]
}

function update(){
    display.innerHTML = finalDisplay
}

function pickMystery(){
    mystery = {suspect:selectRandom(suspectsArray), weapon:selectRandom(weaponsArray), room:selectRandom(roomsArray)}
    return mystery
}

function revealMystery(mystery){
    finalDisplay = `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`
    update()
}