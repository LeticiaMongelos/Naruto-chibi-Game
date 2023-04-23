const characterPlayerButton = document.getElementById('button-character') 
const fireButton = document.getElementById('fire-button')
const waterButton = document.getElementById('water-button')
const earthButton = document.getElementById('earth-button')
const windButton = document.getElementById('wind-button')
const lightningButton = document.getElementById('lightning-button')
const sectionChoosingAtacck = document.getElementById('attack-choose')
const sectionRestart = document.getElementById('restart')
const restartButton = document.getElementById('restart-button')
const characterRandomButton = document.getElementById('button-random')
const sectionChoosingCharacter = document.getElementById('character-choose')
const inputNaruto = document.getElementById('naruto')
const inputMinato = document.getElementById('minato')
const inputItachi = document.getElementById('itachi')
const spanPlayerCharacter = document.getElementById('player-character')
const spanRandomCharacter = document.getElementById('enemy-character')
const spanPlayerLives = document.getElementById('player-lives')
const spanEnemyLives = document.getElementById('enemy-lives')
const result = document.getElementById('fight-result')
const attackPlayer = document.getElementById('player-attack')
const attackEnemy = document.getElementById('enemy-attack')

let characters = []
let playerAttack
let enemyAttack
let playerLives = 3;
let enemyLives = 3;

class Character {
    constructor(name, pic, lives) {
        this.name = name
        this.pic = pic
        this.lives = lives
    }
}

let naruto = new Character('Naruto Uzumaki', './img/Naruto.png', 3)
let minato = new Character('Minato Namikaze', './img/Minato.png', 3)
let itachi = new Character('Itachi Uchiha', './img/Itachi.png', 3)

characters.push(naruto, minato, itachi)

function startGame() {
    characterPlayerButton.addEventListener('click', choosingPlayerCharacter) 
    characterRandomButton.addEventListener('click', randomPlayerCharacter)

    fireButton.addEventListener('click', fireAttack)
    waterButton.addEventListener('click', waterAttack)
    earthButton.addEventListener('click', earthAttack)
    windButton.addEventListener('click', windAttack)
    lightningButton.addEventListener('click', lightningAttack)

    restartButton.addEventListener('click', restartGame)

    sectionChoosingAtacck.style.display = 'none'
    sectionRestart.style.display = 'none'
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function choosingPlayerCharacter() {
    sectionChoosingAtacck.style.display = 'flex'
    sectionChoosingCharacter.style.display = 'none'
    sectionRestart.style.display = 'none'

    if (inputNaruto.checked) {
        spanPlayerCharacter.innerHTML = 'Naruto Uzumaki'
        choosingEnemyCharacter()
    }   else if (inputMinato.checked) {
        spanPlayerCharacter.innerHTML = 'Minato Namikaze'
        choosingEnemyCharacter()
    }   else if (inputItachi.checked) {
        spanPlayerCharacter.innerHTML = 'Itachi Uchiha'
        choosingEnemyCharacter()
    }   else {
        alert('You must select a character to continue!')
    }

    characterPlayerButton.disabled = true
    characterRandomButton.disabled = true
} 

function randomPlayerCharacter() {
    let randomCharacter = random(1,3)

    if (randomCharacter == 1) {
        spanPlayerCharacter.innerHTML = 'Naruto Uzumaki'
    } else if (randomCharacter == 2) {
        spanPlayerCharacter.innerHTML = 'Minato Namikaze'
    } else {
        spanPlayerCharacter.innerHTML = 'Itachi Uchiha'
    }
    choosingEnemyCharacter()
    
    characterPlayerButton.disabled = true
    characterRandomButton.disabled = true
}

function choosingEnemyCharacter() {
    let randomCharacter = random(1,3)

    if (randomCharacter == 1) {
        spanRandomCharacter.innerHTML = 'Naruto Uzumaki'
    } else if (randomCharacter == 2) {
        spanRandomCharacter.innerHTML = 'Minato Namikaze'
    } else {
        spanRandomCharacter.innerHTML = 'Itachi Uchiha'
    }
}

function choosingEnemyAttack() {
    let randomEnemyAttack = random(1,5)

    if (randomEnemyAttack == 1) {
        enemyAttack = 'KATON'
    } else if (randomEnemyAttack == 2) {
        enemyAttack = 'SUITON'
    } else if (randomEnemyAttack == 3) {
        enemyAttack = 'DOTON'
    } else if (randomEnemyAttack == 4) {
        enemyAttack = 'FUUTON'
    } else {
        enemyAttack = 'RAITON'
    }
    fight()
}

function fireAttack() {
    playerAttack = "KATON"
    choosingEnemyAttack()
}

function waterAttack() {
    playerAttack = "SUITON"
    choosingEnemyAttack()
}

function earthAttack() {
    playerAttack = "DOTON"
    choosingEnemyAttack()
}

function windAttack() {
    playerAttack = "FUUTON"
    choosingEnemyAttack()
}

function lightningAttack() {
    playerAttack = "RAITON"
    choosingEnemyAttack()
}

function fight() {
    if (playerAttack == enemyAttack) {
        createMessage("TIE")  
    } else if (playerAttack == 'KATON' && enemyAttack == 'FUUTON' ) {
        createMessage('¡YOU WIN!🎉')
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == 'FUUTON' && enemyAttack == 'RAITON') {
        createMessage('¡YOU WIN!🎉')
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == 'RAITON' && enemyAttack == 'DOTON') {
        createMessage('¡YOU WIN!🎉')
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == 'DOTON' && enemyAttack == 'SUITON') {
        createMessage('¡YOU WIN!🎉')
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == 'SUITON' && enemyAttack == 'KATON') {
        createMessage('¡YOU WIN!🎉')
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else {
        createMessage('YOU LOSE')
        playerLives--
        spanPlayerLives.innerHTML = playerLives
    }
    lifeCheck()
}

function lifeCheck() {
    if (enemyLives == 0) {
        createFinalMessage('¡Congratulations! You Win :)')
    } else if (playerLives == 0) {
        createFinalMessage('GAME OVER')
    }

}

function createMessage(fightResult) {

    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    result.innerHTML = fightResult
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    attackPlayer.appendChild(newPlayerAttack)
    attackEnemy.appendChild(newEnemyAttack)
}

function createFinalMessage(finalResult) {
    
    result.innerHTML = finalResult 
    
    fireButton.disabled = true
    waterButton.disabled = true
    earthButton.disabled = true
    windButton.disabled = true
    lightningButton.disabled = true

    sectionRestart.style.display = 'flex'
}

function restartGame() {
    location.reload()
}

window.addEventListener('load', startGame)

