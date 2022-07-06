// function externa(){
//     function interna(){
//         console.log("Funcao interna rodando")
//     }
//     interna();
// }

// console.log(externa.toString())

// const article = {
//     title: 'Descomplica Call',
//     language: 'JS'
// }

// const print = () => { console.log(`${this.title} em ${this.language}.`)};
// print() //teremos undefined

// print.call(article)


//Nova palavra NEW
// function F() {
//     this.prop = 'hello';
//     console.log(this);
// };

// const f = new F();
// console.log(F())
// console.log(f); // { prop: 'hello' }
// O new retorna o objeto que corresponde/ abraça as propriedades daquela funcao



// class marvelHero {
//     constructor(){
//         this.nome = "hello"
//     };
// }
// console.log(typeof marvelHero);

// const hero = new marvelHero()
// console.log(typeof hero); // logs 'function'
// console.log(hero); // { nome: 'hello' }

// class Cat {
//     constructor(name) {
//         this._name = name;
//     }

//     miar() {
//         console.log(this._name + ': meow!');
//     }
// }

// const gato = new Cat('Mingau');
// console.log(gato)
// gato.miar();
// console.log(gato._name)

// class Person {
//     constructor(firstname, lastname) {
//         this._firstname = firstname;
//         this._lastname = lastname;
//     }

//     get apelido() {
//         return this._firstname + ' ' + this._lastname;
//     }

//     set firstname(value) {
//         this._firstname = value;
//     }

//     set lastname(value) {
//         this._lastname = value;
//     }
// }

// const luiz = new Person('Luiz', 'De Aragão');
// console.log(luiz.apelido);
// luiz.lastname = 'Bros';
// console.log(luiz.fullname)

// class Point2D {
//     constructor(x, y) {
//         this._x = x;
//         this._y = y;
//     }

//     static get ZERO() {
//         return new Point2D(0, 0);
//     }

//     static getDistance(pointA, pointB) {
//         const sqrDistance =
//             (pointA._x - pointB._x) * (pointA._x - pointB._x) +
//             (pointA._y - pointB._y) * (pointA._y - pointB._y);
//         return Math.sqrt(sqrDistance);
//     }
// }

// console.log(Point2D.ZERO); // { _x: 0, _y: 0 }
// const pointA = new Point2D(3, 4),
//       pointB = new Point2D(3, 5),
//       distanceAB = Point2D.getDistance(pointA, pointB),
//       distanceA2B2 = Point2D.getDistance({ _x: 3, _y: 4 }, { _x: 3, _y: 5 });


// console.log(distanceAB); 
// console.log(distanceA2B2);