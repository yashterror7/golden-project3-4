var form,player,game;
var ball,playerPaddle,computerpaddle,edges;
var compScore=0,Playerscore=0;
var gameState =0,playerCount=0;
var database;
var image1;
var gameStatepong=0;
function preload(){
image1=loadImage("sprites/conversation1.jpg");
}


function setup() {
  createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  background(255,255,255);  
  if(playerCount === 1){
    game.update(0);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState===2) {
    game.end();
  }
}