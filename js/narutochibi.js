const characterPlayerButton = document.getElementById('button-character')
const sectionChoosingAtacck = document.getElementById('attack-choose')
const sectionRestart = document.getElementById('restart')
const restartButton = document.getElementById('restart-button')
const sectionChoosingCharacter = document.getElementById('character-choose')
const spanPlayerCharacter = document.getElementById('player-character')
const spanRandomCharacter = document.getElementById('enemy-character')
const spanPlayerLives = document.getElementById('player-lives')
const spanEnemyLives = document.getElementById('enemy-lives')
const result = document.getElementById('fight-result')
const attackPlayer = document.getElementById('player-attack')
const attackEnemy = document.getElementById('enemy-attack')
const cardsContainer = document.getElementById('cardsContainer')
const attacksContainer = document.getElementById('attacks-container')

let characters = []
let playerAttack
let enemyAttack
let inputNaruto
let inputMinato
let inputItachi
let fireButton
let waterButton
let earthButton
let windButton
let lightningButton
let characterPlayer
let attacksPlayer
let characterOption
let playerLives = 3;
let enemyLives = 3;

class Character {
    constructor(name, pic, lives, id) {
        this.name = name
        this.pic = pic
        this.lives = lives
        this.id = id
        this.attacks = []
    }
}

let naruto = new Character('Naruto Uzumaki', './img/Naruto.png', 3, 'naruto')
let minato = new Character('Minato Namikaze', './img/Minato.png', 3, 'minato')
let itachi = new Character('Itachi Uchiha', './img/Itachi.png', 3, 'itachi')

naruto.attacks.push(
    { name: '🌪️', id: 'wind-button' },
    { name: '🔥', id: 'fire-button' },
    { name: '🌱', id: 'earth-button'},
    { name: '⚡', id: 'lightning-button'},
    { name: '💧', id: 'water-button'}
)

minato.attacks.push(
    { name: '🌪️', id: 'wind-button' },
    { name: '🌱', id: 'earth-button' },
    { name: '⚡', id: 'lightning-button' },
    { name: '💧', id: 'water-button' },
    { name: '🔥', id: 'fire-button' }
)

itachi.attacks.push(
    { name: '🔥', id: 'fire-button' },
    { name: '🌱', id: 'earth-button' },
    { name: '💧', id: 'water-button' },
    { name: '🌪️', id: 'wind-button' },
    { name: '⚡', id: 'lightning-button' }
)

characters.push(naruto, minato, itachi)

function startGame() {
    characters.forEach((Character) => {
        characterOption = `
        <input type="radio" name="character" id=${Character.id} />
                <label class="character" for=${Character.id}>
                    <p>${Character.name}</p>
                    <img src=${Character.pic} alt=${Character.name}>
                </label>
     `
    cardsContainer.innerHTML += characterOption

     inputNaruto = document.getElementById('naruto')
     inputMinato = document.getElementById('minato')
     inputItachi = document.getElementById('itachi')
    })

    characterPlayerButton.addEventListener('click', choosingPlayerCharacter)

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
        spanPlayerCharacter.innerHTML = naruto.name
        characterPlayer = naruto.name
    }   else if (inputMinato.checked) {
        spanPlayerCharacter.innerHTML = minato.name
        characterPlayer = minato.name
    }   else if (inputItachi.checked) {
        spanPlayerCharacter.innerHTML = itachi.name
        characterPlayer = itachi.name
    }   else {
        alert('You must select a character to continue!')
    }
    extractAttacks(characterPlayer)
    choosingEnemyCharacter()
    characterPlayerButton.disabled = true
}

function extractAttacks(characterPlayer) {
    let attacks
    for (let i = 0; i < characters.length; i++) {
        if (characterPlayer == characters[i].name) {
            attacks = characters[i].attacks
        }
        
    }
    showAttacks(attacks)
}

function showAttacks(attacks) {
    attacks.forEach((attack) => {
        attacksPlayer = `
        <button id=${attack.id} class="attack-button"> 
        ${attack.name} </button>
        `
        attacksContainer.innerHTML += attacksPlayer 
    })

     fireButton = document.getElementById('fire-button')
     waterButton = document.getElementById('water-button')
     earthButton = document.getElementById('earth-button')
     windButton = document.getElementById('wind-button')
     lightningButton = document.getElementById('lightning-button')

     fireButton.addEventListener('click', fireAttack)
     waterButton.addEventListener('click', waterAttack)
     earthButton.addEventListener('click', earthAttack)
     windButton.addEventListener('click', windAttack)
     lightningButton.addEventListener('click', lightningAttack)
}

function choosingEnemyCharacter() {
    let randomCharacter = random(0, characters.length -1)

    spanRandomCharacter.innerHTML = characters[randomCharacter].name
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

