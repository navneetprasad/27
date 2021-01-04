class Chain{
    constructor(bodyA,bodyB){
     var options = {
         bodyA:bodyA,
         bodyB:bodyB,
         stifness : 0.04,
         length : 10
}
this.Chain = Constraint.create(options);
World.add(world,this.Chain);

    }
    display(){
     var pointA = this.Chain.bodyA.position;   
     var pointB = this.Chain.bodyB.position;
     strokeWeight(7);
     line(pointA.x,pointA.y,pointB.x,pointB.y);   
    }
}