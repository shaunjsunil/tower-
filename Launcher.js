class Launcher{
constructor(bodyA,pointB){
var options={
bodyA : bodyA,
pointB :pointB,
stiffness : 0.1,
length : 9,
}
this.pointB=pointB;
this.launcher=Matter.Constraint.create(options)
World.add(world,this.launcher)
}
fly(){

this.launcher.bodyA=null;

}

attach(body){this.launcher.bodyA=body}


display(){
    if(this.launcher.bodyA){
    var pos= this.launcher.bodyA.position;
    var pointA=this.pointB;
    strokeWeight(4);
    line(pos.x,pos.y,pointA.x,pointA.y)
    }

}





}



