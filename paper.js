class paper{
    constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, w,h, options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperObjPos=this.body.position;		

			push()
			translate(paperObjPos.x, paperObjPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(225)
			rect(0,0,this.w,this.h);
			pop()
			
	}
}