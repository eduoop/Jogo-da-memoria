(function(){
    startGame()

    function startGame() {
        for(var i = 0; i < 16; i++) {
            var card = document.querySelector(`#card${i}`)
            card.style.left = i % 8 === 0 ? 5 + 'px' : i % 8 * 165 + 5 + 'px'
            card.style.top = i < 8 ? '5px' : '250px'

            card.addEventListener('click', flipCard)
        }
    }

    function flipCard() {
        var faces = this.getElementsByClassName("face")
        faces[0].classList.toggle("fliped")
        faces[1].classList.toggle("fliped")
        console.log( faces[0].classList)
    }
}());