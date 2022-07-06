const x: number = 3;

const y = 5


const vetor: number[] = [1, 2, 3];

function compare(x: number, y: number): boolean {
    return x > y ;
}

console.log(compare(x, x+3)?'X maior que Y' :'Y maior que X')

/**
 * Interfaces
 * Muitas vezes precisamos reaproveitar tipagens entre vários arquivos e funções da aplicação, 
 * nisso entram as interfaces, por exemplo:
 */
interface Pessoa {
    nome: string
    idade: number
}

function bomDia(pessoa: Pessoa) {
    console.log(`Bom-dia ${pessoa.nome}`);
}
const pessoa1 = {nome: "Luiz", idade: 32}
bomDia(pessoa1)

function maiorDeIdade(pessoa: Pessoa) {
    console.log(pessoa.idade >= 18 ? "é maior de idade" : "é menor"); 
}

maiorDeIdade(pessoa1)

/**
 * Types
 * Quando uma variável pode assumir formatos distintos mesmo que pertencendo a uma mesma entidade 
 * podemos utilizar os Types. Esses se diferem das interfaces em alguns pontos como:
 *      Interfaces podem herdar outras interfaces, Types não;
 *      Types podem assumir formatos distintos;
 */

 type Polygon =
 { type: 'square', x: number } |
 { type: 'circle', radius: number } |
 { type: 'rectangle', x: number, y: number }

 export function area (polygon: Polygon) { return "retorna a area"}

/**
 * Enums
 * 
 * Os Enums são formas de definirmos constantes na tipagem a fim de reaproveitarmos código 
 * entre funções e/ou arquivos. 
 * Por exemplo, na função acima poderíamos usar os Enums da seguinte forma:
 */

enum PolygonTypes { 
  Square, 
  Circle, 
  Rectangle,
  Pentagano 
}

type Polygon2 =
  { type: "square", x: number, y: number } |
  { type: PolygonTypes.Circle, radius: number } |
  { type: PolygonTypes.Rectangle, x: number, y: number };

export function area2 (polygon: Polygon2): number {
  switch (polygon.type) {
    case 'square': return polygon.x ** 2
    case PolygonTypes.Rectangle: return polygon.x * polygon.y
    case PolygonTypes.Circle: return Math.PI * polygon.radius ** 2
  }
}

export function perimetro(polygon: Polygon){
  switch (polygon.type) {
    case 'square':  return polygon.x * 4
    case 'circle':  return Math.PI *  2 * polygon.radius
    case 'rectangle': return 2 * polygon.x + 2* polygon.y
  }
}
