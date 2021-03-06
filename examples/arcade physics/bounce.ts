// Original JS mods by Patrick OReilly 
// Original JS Twitter: @pato_reilly Web: http://patricko.byethost9.com

var image: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => game.load.image("flyer", "assets/sprites/phaser-dude.png"), 

    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //  This creates a simple sprite that is using our loaded image and
        //  displays it on-screen
        //  and assign it to a variable
        image = game.add.sprite(0, 0, "flyer");
        game.physics.enable(image, Phaser.Physics.ARCADE);
        //  This gets it moving
        image.body.velocity.setTo(200,200);      
        //  This makes the game world bounce-able
        image.body.collideWorldBounds = true;
        
        //  This sets the image bounce energy for the horizontal 
        //  and vertical vectors. "1" is 100% energy return
        image.body.bounce.set(1);
    }, 

    render: () => game.debug.spriteInfo(image,32,32) 
});
