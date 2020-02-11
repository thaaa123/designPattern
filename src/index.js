class Proson {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Women extends Proson {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}

// let p = new Proson('dongdong.chen');
// console.log(p.getName());
let xiaoli = new Women('xiaoli', 14);
console.log('name', xiaoli.getName())
console.log('age', xiaoli.getAge())