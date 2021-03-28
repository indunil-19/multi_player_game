var window_height=window.innerHeight;
var window_width=window.innerWidth;

var config={
    type:Phaser.AUTO,
    width:window_width,
    height:window_height,
    backgroundColor:'#000000',
    physics:{
        default:"arcade",
        arcade:{
            gravity:{
                y:0
            },
            fps:60
        }
    },
    scene:{
        preload:preload,
        create:create,
        update:update
    }
}
var game=new Phaser.Game(config)

var player; // this is the new variable



function create(){
    this.player = new Player(this, 500, 500);
}
function preload(){
    this.load.image('player', 'public/img/player.png');
    this.load.image('bullet', 'public/img/bullet.png')
}
function update(){
    this.player.update();
}