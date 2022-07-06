function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const idade = form.querySelector('.idade');
    const telefone = form.querySelector('.telefone');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      telefone: telefone.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
      `${idade.value} ${telefone.value}</p>`;
  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
