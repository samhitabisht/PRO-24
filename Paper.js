class Paper{
    constrcutor(x,y,width,height) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.ellipse(x, y, width, height, options);
        World.add(world, this.body);
    }
}