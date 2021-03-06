class Shot extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x,y, angle){
        super(scene,x,y,"bullet");
        scene.add.existing(this); 
        scene.physics.add.existing(this)

        this.bullet_speed = 600;
        
        this.setCollideWorldBounds(true);

        this.depth = 0;

        this.setAngle(this.angle);

        angle = angle * (Math.PI / 180);

        this.vx = this.bullet_speed * Math.cos(angle);
        this.vy = this.bullet_speed * Math.sin(angle);
        
        this.setVelocity(this.vx, this.vy);

   }

  

}