class Parents{
    constructor(){
        this.father = "Misbah"
    }
}
class Child extends Parents{
    constructor (name){
        super();
        this.name = name

        
    }
    // function decleration
    getfullName(){
        return this.name+" "+this.father;
    }
}
const baby = new Child ("Ayman");
console.log(baby.getfullName());
