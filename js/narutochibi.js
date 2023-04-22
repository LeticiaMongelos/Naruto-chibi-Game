let playerAttack
let enemyAttack
let playerLives = 3;
let enemyLives = 3;

function startGame() {
    // Vinculación del elemento con su ID
    let characterPlayerButton = document.getElementById('button-character') 
    // Se agrega el "evento" esperado (el click)
    characterPlayerButton.addEventListener('click', choosingPlayerCharacter) 
    let characterRandomButton = document.getElementById('button-random')
    characterRandomButton.addEventListener('click', randomPlayerCharacter)

    let fireButton = document.getElementById('fire-button')
    fireButton.addEventListener('click', fireAttack)
    let waterButton = document.getElementById('water-button')
    waterButton.addEventListener('click', waterAttack)
    let earthButton = document.getElementById('earth-button')
    earthButton.addEventListener('click', earthAttack)
    let windButton = document.getElementById('wind-button')
    windButton.addEventListener('click', windAttack)
    let lightningButton = document.getElementById('lightning-button')
    lightningButton.addEventListener('click', lightningAttack)

    let restartButton = document.getElementById('restart-button')
    restartButton.addEventListener('click', restartGame)

    // Se ocultan las seciones hasta que corresponda utilizarlas
    let sectionChoosingAtacck = document.getElementById('attack-choose')
    sectionChoosingAtacck.style.display = 'none'
    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'none'
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function choosingPlayerCharacter() {
    let sectionChoosingAtacck = document.getElementById('attack-choose')
    sectionChoosingAtacck.style.display = 'flex'
    let sectionChoosingCharacter = document.getElementById('character-choose')
    sectionChoosingCharacter.style.display = 'none'
    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'none'

    let inputNaruto = document.getElementById('naruto')
    let inputMinato = document.getElementById('minato')
    let inputItachi = document.getElementById('itachi')
    let spanPlayerCharacter = document.getElementById('player-character')
    
    // innerHTML para modificar el DOM (para hacer dinámica partes de la estructura)
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

    // Desactivación de los botones luego de usarlos
    let characterPlayerButton = document.getElementById('button-character')
    characterPlayerButton.disabled = true
    let characterRandomButton = document.getElementById('button-random')
    characterRandomButton.disabled = true
}

function randomPlayerCharacter() {
    let randomCharacter = random(1,3)
    let spanPlayerCharacter = document.getElementById('player-character')

    if (randomCharacter == 1) {
        spanPlayerCharacter.innerHTML = 'Naruto Uzumaki'
    } else if (randomCharacter == 2) {
        spanPlayerCharacter.innerHTML = 'Minato Namikaze'
    } else {
        spanPlayerCharacter.innerHTML = 'Itachi Uchiha'
    }
    choosingEnemyCharacter()
    let characterPlayerButton = document.getElementById('button-character')
    characterPlayerButton.disabled = true
    let characterRandomButton = document.getElementById('button-random')
    characterRandomButton.disabled = true
}

function choosingEnemyCharacter() {
    let randomCharacter = random(1,3)
    let spanRandomCharacter = document.getElementById('enemy-character')

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
    let spanPlayerLives = document.getElementById('player-lives')
    let spanEnemyLives = document.getElementById('enemy-lives')

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

// ANALIZA A FONDO COMO FUNCIONA ESTA PARTE
function createMessage(fightResult) {
    let result = document.getElementById('fight-result')
    let attackPlayer = document.getElementById('player-attack')
    let attackEnemy = document.getElementById('enemy-attack')

    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    result.innerHTML = fightResult
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    attackPlayer.appendChild(newPlayerAttack)
    attackEnemy.appendChild(newEnemyAttack)
}

function createFinalMessage(finalResult) {
    let sectionMessages = document.getElementById('fight-result')
    
    sectionMessages.innerHTML = finalResult 
    
    let fireButton = document.getElementById('fire-button')
    fireButton.disabled = true
    let waterButton = document.getElementById('water-button')
    waterButton.disabled = true
    let earthButton = document.getElementById('earth-button')
    earthButton.disabled = true
    let windButton = document.getElementById('wind-button')
    windButton.disabled = true
    let lightningButton = document.getElementById('lightning-button')
    lightningButton.disabled = true

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'flex'
}
function restartGame() {
    location.reload()
}
//window (navegador) llamar a cualquier evento que le pase al navegador, para no llevar el script hasta abajo
window.addEventListener('load', startGame)

