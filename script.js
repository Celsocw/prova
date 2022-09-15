// ATENÇÃO, Insira seu script aqui

/*função valida campo*/

const nameField = document.querySelector("nome ");

nameField.addEventListener("input", () => {
  nameField.setCustomValidity("");
  nameField.checkValidity();
  console.log(nameField.checkValidity());
});

nameField.addEventListener("invalid", () => {
  nameField.setCustomValidity("Please fill in your First Name.");
});


//Nome do aluno: Celso Crivellaro Werner

//----------------------------------------------------------------------------------------------------------------

