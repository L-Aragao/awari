// ficheiro B.js

// sintaxe CommonJS
const A = require('./A.js');
const foo = A.foo;
const baz = A.baz;

// sintaxe ES6
import * as A from './A.js';
const foo2 = A.foo;
const baz2 = A.baz;

// ou somente
import {foo, baz} from './A.js';

// ou na utlima versao / antes ja disponivel com typescript
import A from './moduloA'