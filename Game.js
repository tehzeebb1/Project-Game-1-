class Game{
   constructor()
   {

    
   }
   getState()
   {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
   }
   update(state)
   {
    database.ref('/').update({
        gameState:state
       });
   }
   
   async start()
   {
    if (gameState === 0)
    {
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        player.getCount();
        }
        form=new Form();
        form.display();     
    }
    //add players here

   }
   

   play()
   {
      // form.hide();

         //add background
         Player.getPlayerInfo();
         console.log(allPlayers);
         var wall = createSprite(505, 250, 10,100);
         wall.shapeColor = "Red";
         var wall2 = createSprite(515, 200, 30, 10);
         wall2.shapeColor ="Red";
         var wall3 = createSprite(206, 41, 20, 252);
         var wall4 = createSprite(149, 157, 100, 20);
         var wall5 = createSprite(17, 182, 100, 20);
         var wall6 = createSprite(109, 217, 20, 106);
         var wall7 = createSprite(30,320, 200, 20);
         var wall8 = createSprite(179, 220, 122, 20);
         var wall9 = createSprite(177, 356, 20, 120);
         var player2 = createSprite(382, 389, 20, 110);
         var wallx = createSprite(388, 280, 100, 20);
         var wally = createSprite(315, 362, 20, 80);
         var wallx2 = createSprite(283, 233, 20, 80);
         var wallx3 = createSprite(331, 76, 100, 20);
         var wallx4 = createSprite(280,60, 20, 90);
         var wallx5 = createSprite(337, 113, 20, 90);
         var wallx6 = createSprite(171, 30, 50, 20);
         var wallx7 = createSprite(368, 35, 20, 70);
         var wallx8 = createSprite(324, 230, 70, 20);
         var wallx9 = createSprite(238, 353, 70, 20);
         var wallx20 = createSprite(20, 259, 50, 20);
         var wallx21 = createSprite(233, 128, 50, 20);
         var wallx22 = createSprite(72, 356, 20, 50);

         var wallx23 = createSprite(500, 12, 20,100);
         var wallx24 = createSprite(590, 112, 300, 20);
         var wallx25 = createSprite(600, 41, 20, 252);
         var wallx26 = createSprite(610, 157, 100, 20);
         var wallx27 = createSprite(420, 182, 100, 20);
         
        text(mouseX + "," + mouseY, mouseX, mouseY);

      drawSprites();
   }
   end()
   {
    imageMode(CENTER);
    Player.getPlayerInfo();  
    console.log("Game Ended");
    fill("red");
    textAlign(CENTER);
    textSize(50);
    // Add ending rank here 
   } 
} 