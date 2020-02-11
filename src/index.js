class Proson {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let p = new Proson('dongdong.chen');
console.log(p.getName());