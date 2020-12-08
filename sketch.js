var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;
var backgroundImg;
var allPlayers;
var player1, player2;
var reward1, reward2, reward3, reward4; 

function preload()
{

}

function setup()
{
    canvas=createCanvas(displayWidth-100, displayHeight-100);
    database=firebase.database();
    game = new Game ();
    game.getState();
    //game.start();
    game.play();

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 0)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}