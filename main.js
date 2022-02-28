(function(){
    var images = []
    var flippedCards= []
    var modalGameOver = document.querySelector("#modalGameOver")

    for(var i = 0; i < 16; i++) {
        var img = {
            src: `images/${i}.jpg`,
            id: i % 8
        }
        images.push(img)
    }
    startGame()

    
    function startGame() {
        flippedCards = []
        images = randomSort(images)
        var frontFaces = document.getElementsByClassName('front')
        for(var i = 0; i < 16; i++) {
            var card = document.querySelector(`#card${i}`)
            card.style.left = i % 8 === 0 ? 5 + 'px' : i % 8 * 165 + 5 + 'px'
            card.style.top = i < 8 ? '5px' : '250px'

            card.addEventListener('click', flipCard)

            frontFaces[i].style.background = "url('"+ images[i].src +"')"
            frontFaces[i].setAttribute("id", images[i].id)
        }

        modalGameOver.style.zIndex = -2
        modalGameOver.removeEventListener('click', startGame, false)
    }

    function randomSort(oldArray) {
        // console.log(Math.floor(Math.random()*11))
        var newArray = []

        while(newArray.length !== oldArray.length) {
            var ing = Math.floor(Math.random()*oldArray.length)
            if(newArray.indexOf(oldArray[ing]) < 0) {
                newArray.push(oldArray[ing])
            }
        }
        return newArray
    }

    function flipCard() {
        if(flippedCards.length < 2) {
            var faces = this.getElementsByClassName("face")

            if(faces[0].classList.length > 2) {
                return;
            }

            faces[0].classList.toggle("fliped")
            faces[1].classList.toggle("fliped")

            flippedCards.push(this)
        } else {
            flippedCards[0].childNodes[1].classList.toggle("fliped")
            flippedCards[0].childNodes[3].classList.toggle("fliped")
            flippedCards[1].childNodes[1].classList.toggle("fliped")
            flippedCards[1].childNodes[3].classList.toggle("fliped")

            gameOver()

            flippedCards = []
        }

    }

    function gameOver() {
        modalGameOver.style.zIndex = 10
        modalGameOver.addEventListener('click', startGame,false)
    }
}());