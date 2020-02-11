class People {
    name
    protected age
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        alert(`my name is ${this.name}`)
    }
}

class Student extends People {
    private grilFriend
    constructor(name, age, grilFriend) {
        super(name, age)
        this.grilFriend = grilFriend
    }
    getAge() {
        alert(`my age is ${this.age}`)
    }
    getGrilGriend() {
        alert(`my age is ${this.grilFriend}`)
    }
}

let xiaowang = new Student('xiaoli', 16, 'xiaoli')
xiaowang.name = 'xiaosun'
console.log(xiaowang.name);
