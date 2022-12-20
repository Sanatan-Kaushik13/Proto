//This is proto
class Dog{
    constructor(_name){
        this.name=_name
        console.log(`The name is ${this.name}`)
    }

    sleep(){
        console.log("The dog slept.")
    }

    static bark(){
        console.log("BARK!")
    }
}

let d=new Dog("Jim")
d.sleep()
console.log(d.name)
Dog.bark()
console.log("Hello World!")