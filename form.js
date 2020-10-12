class Form {
 constructor ()
 {this.title = createElement("h2");
  this.input = createInput("Name");
  this.button = createButton("Play");
  this.reset = createButton("reset");
  this.greeting = createElement("h2");
}
 display(){
     this.title.html("modern RAMAYAN");
     this.title.position(200,100);
     this.input.position(200,200);
     this.button.position(300,300);
     this.reset.position(370,100);
     this.reset.mousePressed(()=>{
       player.updatecount(0);
       game.update(0);
     })

     this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide();
        this.title.hide();
        player.name = this.input.value();
        playerCount++;
        player.index = playerCount;
        player.update(player.name);
        player.updateCount(playerCount);
        this .greeting.html("hello u are going to enter the life of "+ player.name);
        this .greeting.position(200,100);
        var button1 = createButton("lets start");
        button1.position(200,300);
        button1.mousePressed(()=>{
        button1.hide();
        this.greeting.hide();
        game.play();
        });
      });
 }


}