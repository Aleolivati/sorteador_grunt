document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let maxNumber = document.getElementById('numero-maximo').value ;
        maxNumber = parseInt(maxNumber) ;

        let randomNumber = Math.random() * maxNumber ;
        randomNumber = Math.floor(randomNumber + 1) ;
        document.querySelector('.resultado').style.display = 'block' ;

        document.getElementById('resultado-valor').innerText = randomNumber ;


    })
})