class Chain{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.01,
            length: 30
        }
        this.chain = Constraint.create(options);

        World.add(world, this.chain);
        console.log(this.chain);
    }
    fly(){
        this.chain.bodyA = null;
       
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
}