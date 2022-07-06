//Nova palavra NEW
function F() {
    console.log(this);
    this.prop = 'hello';
};

const f = new F();
console.log(f); // { prop: 'hello' }
// O new retorna o objeto que corresponde/ abraça as propriedades daquela funcao



class marvelHero {
    constructor(){
        let nome = "hello"
    };
}
console.log(typeof marvelHero); // logs 'function'
//Podemos dizer que uma classe é um extensao/ evolucao de uma funcao


//Class => this, arguments, methods (length, apply, call, push, etc), escopo)
//function != class => não é de ordem de primeira = variavel
//conjunto de regras que servem de modelo para objetos

//instaciar = utilizar/ criar um objeto com referencia de uma classe

const hero = new marvelHero()
console.log(typeof hero); // logs 'function'
console.log(f); // { nome: 'hello' }




//Construtores sao como funcoes de uma funcao, que sao executades sempre que instaciamos uma classe(criamos um obejto daquela classe)
class Person {
    constructor(name, hairColor, age) {
        this._name = name;
        this._hairColor = hairColor;
        this._age = age;
    }
}

const pessoa = new Person();

//Construtores são obrigatorios, mas podem sem omitidos, sempre existira um constructor, mesmo quando você não o cria
class Superhero { }

const batman = new Superhero();

class DChero {
    constructor() { }
}

const superman = new Superhero();

//Como classes são uma "evolucao dos funcoes" elas também podem possuir suas proprias funcoes, conhecidade nesse paradigma como metodos 
//e tambem possui suas propriedades

//Class methods and properties

class Cat {
    constructor(name) {
        this._name = name;
    }

    miar() {
        console.log(this._name + ': meow!');
    }
}
const gato = new Cat('Mingau');
console.log(gato)
gato.miar();
console.log(gato._name)

//Getters and setters - get e set sao palavras reservadas no JS, elas servem para abraçar o conceito de publico e privado
//no paradigma de POO, as propriedades de uma classe/objeto devem ser privadas e para manipulalas devemos utilizar de funcoes como (get/ set)
//NO JS o uso é menos verboso do que em outras linguagens
class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get fullname() {
        return this._firstname + ' ' + this._lastname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    set lastname(value) {
        this._lastname = value;
    }
}

const luiz = new Person('Luiz', 'De Aragão');
console.log(luiz.fullname);
luiz.lastname = 'Bros';
console.log(luiz.fullname)

//Static methods and properties - a palavra reservada static garante que o metodo e propriedade de uma classe sejam utilizado 
//mesmo sem a necessidade de instaciar/ criar um objeto daquela classe
class Point2D {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static get ZERO() {
        return new Point2D(0, 0);
    }

    static getDistance(pointA, pointB) {
        const sqrDistance =
            (pointA._x - pointB._x) * (pointA._x - pointB._x) +
            (pointA._y - pointB._y) * (pointA._y - pointB._y);
        return Math.sqrt(sqrDistance);
    }
}

console.log(Point2D.ZERO); // { _x: 0, _y: 0 }
const pointA = new Point2D(3, 4),
      pointB = new Point2D(3, 5),
      distanceAB = Point2D.getDistance(pointA, pointB),
      distanceA2B2 = Point2D.getDistance({ _x: 3, _y: 4 }, { _x: 3, _y: 5 });


console.log(distanceAB); 
console.log(distanceA2B2);// 1