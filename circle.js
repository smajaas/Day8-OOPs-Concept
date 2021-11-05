class circle {
    constructor(radius=1.0,color="red")
    {
    this.radius=radius;
    this.color=color;
}
getRadius() {
    console.log(`The Radius of Circle is:${this.radius}`);
}
setRadius(a) {
    this.radius=a;
    console.log(`Set Radius:${this.radius}`)

}
getColor() {
    console.log(`The circle color is:${this.color}`)
}
setColor(blue) {
this.color=blue;
console.log(`Set the circle color:${this.color}`)
}
toString(){
    console.log(`Circle[radius= ${this.radius} color= ${this.color}]`)
}
getArea(){
    console.log(`Area of circle${Math.PI*(this.radius*this.radius)}`)
  }
  getCircumference(){
    console.log(`circumference of circle ${Math.PI*(this.radius*this.radius*2)}`)
}
}

const circle1 = new circle(2,"red")
circle1.getRadius()
circle1.setRadius(5)
circle1.getColor()
circle1.setColor("orange")
circle1.toString()
circle1.getArea()
circle1.getCircumference()
