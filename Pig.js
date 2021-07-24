class Pig extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50);
        this.image = loadImage("Sprites/enemy.png");
    }
    display()
    {
       //console.log(this.body.speed);
        if(this.body.speed < 4)
        {
            super.display();
        }
        else
        {
            World.remove(myWorld, this.body);
        }
    }
};