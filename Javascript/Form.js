class Form{
    constructor(){
        this.input = createInput("name");
        this.greeting = createElement("H3");
        this.title = createElement("H2");
        this.button = createButton("PLAY!");
        this.reset = createButton("RESET GAME!!!");

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50 ,0);
        this.input.position(displayWidth/2 - 40,displayHeight/2 -80);
        this.button.position(displayWidth/2 + 30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name); 
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.Update(0);
            database.ref("Players").remove();
            location.reload();
        })
        }
     }