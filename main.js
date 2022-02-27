(function(){
    var images = []

    for(var i = 0; i < 16; i++) {
        var img = {
            src: `images/${i}.jpg`,
            id: i % 8
        }
        images.push(img)
    }
    startGame()

    function startGame() {
        var frontFaces = document.getElementsByClassName('front')
        for(var i = 0; i < 16; i++) {
            var card = document.querySelector(`#card${i}`)
            card.style.left = i % 8 === 0 ? 5 + 'px' : i % 8 * 165 + 5 + 'px'
            card.style.top = i < 8 ? '5px' : '250px'

            card.addEventListener('click', flipCard)

            frontFaces[i].style.background = "url('"+ images[i].src +"')"
            frontFaces[i].setAttribute("id", images[i].id)
            console.log(frontFaces[i].id)
        }
    }

    function flipCard() {
        var faces = this.getElementsByClassName("face")
        faces[0].classList.toggle("fliped")
        faces[1].classList.toggle("fliped")
        console.log( faces[0].classList)
    }
}());