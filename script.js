let musica = document.querySelector('audio');
// EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.decricao h2');

let nomeArtista = document.querySelector('.descricaoi'); 


duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
musica.addEventListener('timeupdate', atualizarBarra);

// FUNÇÕES 
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display ='block';
    document.querySelector('.botao-play').style.display ='none';
}
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display ='none';
    document.querySelector('.botao-play').style.display ='block';
}
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}
