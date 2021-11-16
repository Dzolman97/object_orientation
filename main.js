let person = {
    firstname: 'Daniel',
    lastname: 'Zolman',
    age: 24
}

// console.log(person.firstname)


let meal = {
    appetizer: 'Bloomin Onion',
    entree: 'Filet Minon',
    dessert: 'Lava Cake',
    drink: 'Dr. Pepper'
}

// const {dessert, appetizer} = meal
// const dessert = meal.dessert

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(myAppetizer, myEntree, myDessert, myDrink)
// console.log(meal)

for(let key in person){
    console.log(key) // property/key
    console.log(person[key]) // value at key
}

person.job = 'Foundations Instructor'
person.age = 25

person['car'] = 'Toyota 4Runner'

delete person.car
// console.log(person)

class Dog {
    constructor(dogName, dogBreed, dogAge){
        this.name = dogName
        this.breed = dogBreed
        this.age = dogAge
    }

    greeting(){
        console.log(`Hi! My name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }

}


let lassie = new Dog('Lassie', 'Collie', 18)


let beethoven = new Dog('Beethoven', 'St. Bernard', 3)

console.log(beethoven)

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, trainingLevel){
        super(dogName, dogBreed, dogAge, trainingLevel)

        this.trainingLevel = trainingLevel
    
    }

    levelUp(num){
        this.trainingLevel += num
    }
}


let chief = new Puppy('Chief', 'Pitbul', '4 months', 10)
console.log(chief)
chief.levelUp(10)
console.log(chief)