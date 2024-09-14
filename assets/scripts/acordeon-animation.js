const btns = document.querySelectorAll('button');


btns.forEach((btn, indice) => {
    btn.addEventListener('click', function () {
        
        const text = document.getElementsByClassName('content')[indice]
        const icon = document.getElementsByClassName('button-icon')[indice]
        const janela = document.getElementsByClassName('acordeon')[indice]
        if (text.style.display === 'none' || text.style.display === '') {
            text.style.display = 'block'
            icon.style.transform = 'rotateZ(180deg)'
            janela.style.background = '#55569E'
            janela.style.borderColor = '#55569E'
        } else {
            text.style.display = 'none'
            icon.style.transform = 'rotateZ(0deg)'
            janela.style.background = 'transparent'
        }
    });
});
