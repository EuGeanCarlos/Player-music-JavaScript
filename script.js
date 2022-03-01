let musica = [
    {titulo:'Born a Rockstar - NEFFEX', artista:'Gean Carlos', src:'music/Born a Rockstar - NEFFEX.mp3', img:'img/rock.jpg'},
    {titulo:'Smokey s Lounge - TrackTribe', artista:'Arnold Cruz', src:'music/Smokeys Lounge - TrackTribe.mp3', img:'img/jazz.jpg'},
    {titulo:'Like That - Anno Domini Beats', artista:'Lil Zyvk', src:'music/Like That - Anno Domini Beats.mp3', img:'img/trap.jpg'}

];


let musica = document.querySelector('audio');
let indexMusica = 0;

// EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.decricao h2');

let nomeArtista = document.querySelector('.descricao i'); 


duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    redenrizarMusica();

});
document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;    
    redenrizarMusica();

});


// FUNÇÕES 

function redenrizarMusica(index){
    musica.setAttribute('src',musica[index].src );
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musica[index].titulo;
        nomeArtista.textContent = musica[index].artista;
        imagem.src = musica[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

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

