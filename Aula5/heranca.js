class Mamifero {
	constructor(idade) {
		this._idade = idade;
	}
}

class Pessoa extends Mamifero {
    constructor(nome, sobreNome, idade) {
      super(idade);
      this._nome = nome;
      this._sobreNome = sobreNome;
    }
    get nome() {
      // getter property of nome
    }
    set nome(value) {
        this._nome = value;
    }

    set sobrenome(value) {
        this._sobreNome = value;
    }
    // more class members…
  }