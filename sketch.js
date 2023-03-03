//variáveis da bolinha
let xBolinha = 290;
let yBolinha = 190;
let diametro = 25;
let raio = diametro / 2;

//variáveis da velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis minha raquete
let xMinhaRaquete = 5
let yMinhaRaquete = 160;
let comprimentoMinhaRaquete = 10;
let alturaMinhaRaquete = 80;

//variaveis oponente
let xRaqueteOponente = 585;;
let yRaqueteOponente = 160;
let comprimentoRaqueteOponente = 10;
let alturaRaqueteOponente = 80;

//variaveis de velocidade raquete
let velocidadeYRaqueteOponente;

let colidiu = false;

//variaveis placar
let meusPontos = 0;
let pontosOponente = 0;

//chance de errar
let chanceDeErrar = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarbolinha();  
  movimentarbolinha();
  colisaoBordas();
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  calculaChanceDeErrar();
 colisaoRaqueteBiblioteca(xMinhaRaquete,yMinhaRaquete);
 colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  }

function mostrarbolinha() {
  circle(xBolinha,yBolinha,diametro);
}

function movimentarbolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBordas(){
    if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
    }
  if (yBolinha + raio > height || yBolinha - raio <0) {
      velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoMinhaRaquete,alturaMinhaRaquete); 
}

  function movimentaMinhaRaquete(){
   if (keyIsDown (UP_ARROW)) {
     yMinhaRaquete -= 10;
   }
    if (keyIsDown (DOWN_ARROW)){
      yMinhaRaquete += 10;
    }
  }

function movimentaRaqueteOponente(){
   velocidadeYRaqueteOponente = yBolinha - yRaqueteOponente - comprimentoRaqueteOponente / 2 - 50
  yRaqueteOponente += velocidadeYRaqueteOponente + chanceDeErrar
  calculaChanceDeErrar ();
}

function colisaoRaqueteBiblioteca (x,y){
  colidiu = 
  collideRectCircle(x,y,comprimentoMinhaRaquete,alturaMinhaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 40
    if (chanceDeErrar >= 79){
    chanceDeErrar = 80
    }
  } else {
    chanceDeErrar -= 40
    if (chanceDeErrar <= 15){
    chanceDeErrar = 15
    }
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize (16); 
  fill(color(255,69,0));
  rect(130,10,40,20);
  fill (255);
  text(meusPontos,150,26);
  fill(color(255,69,0));
  rect(430,10,40,20);
  fill (255);
  text(pontosOponente, 450,26);
}

function marcaPonto(){
  if (xBolinha > 585){
    meusPontos +=1;
    ponto.play();
  }
 if (xBolinha < 10){
   pontosOponente += 1;
   ponto.play();
 }
}


  