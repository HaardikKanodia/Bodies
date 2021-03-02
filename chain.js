class chain  {
constructor(bodyA,bodyB) {
    var option= {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10,
       }

   
     this.Chain=Constraint.create(option);
       World.add(world,this.Chain);

}

display(){
strokeWeight(10);
    line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y);

}




}