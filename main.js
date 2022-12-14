function playSound (seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if(element === null) {
        alert('Elemento não encontrado ou seletor inválido')
    }

    if(element != null && element.localName === 'audio') {
        element.play();

    }

    else {
        alert('Elemento não encontrado ou seletor inválido')
    }

}

const listOfKeys = document.querySelectorAll('.tecla');


for(let counter = 0; counter < listOfKeys.length; counter++) {

    const key = listOfKeys[counter];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (evento) {

        if(evento.code === 'Space' || evento.code ==='Enter'){
            key.classList.add('ativa');
        }

    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }

}