// variaveis mario e pipe
const mario = document.querySelector('.mario'); // usando o query selector para pegar as infromações da class 'mario' enclausurada no HTML
const pipe = document.querySelector('.pipe'); // usando o query selector para pegar as infromações da class 'pipe' enclausurada no HTML

const jump = () => { // variavel jump recebendo uma função anonima para remover a animação de pula quando o personagem bater no cano
    mario.classList.add('jump'); // adicionando a class jump na variavel 'mario'

    setTimeout(() => { // dando uma pausa a animação

        mario.classList.remove('jump'); // removendo a class 'jump' da class 'mario' quando o personagem bater no cano

    }, 500);
}

    const loop = setInterval (() => { // loop para mudar as poses do personagem quando o mesmo bater no cano

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // um modo alternativo de pegar as informações das configurações 'mario' no css
        
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { // determinando os valores para o loop de mudança de poses

            pipe.style.animation = 'none'; // tirando a animação do cano quando o personagem bater no objeto
            pipe.style.left = `${pipePosition}px`; //pausando o cano

            mario.style.animation = 'none';  // tirando a animação do mario quando o personagem bater no objeto
            mario.style.bottom = `${marioPosition}px`;  //pausando o mario

            mario.src="imagens/game-over.png" // adicionando a nova pose do personagem quando o mesmo bater no cano 
            mario.style.width = '75px' // configuração da nova pose
            mario.style.marginLeft = '50px'  // configuração da nova pose

            clearInterval(loop); // dando intervalo apos o loop ser ativado 

        }

    },10)

document.addEventListener('keydown', jump); // configurando para quando o usuario clicar o botão o personagem conseguir pular