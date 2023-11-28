document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    let isValid = true;
   
    let name = document.getElementById('nome');
    let sobrenome = document.getElementById('descricao');
    let idade = document.getElementById('preco');
    let image = document.getElementById('image');
    let marca = document.getElementById('marca');
    let categoria = document.getElementById('categoria');
   
    // Validando nome, sobrenome, email, idade e preço
    [name, sobrenome, idade, marca, categoria].forEach(function(field) {
       if (field.value.trim() === '') {
         isValid = false;
         showError(field, 'Campo não pode ser vazio');
       } else if (field.value.length < 3) {
         isValid = false;
         showError(field, 'Campo deve ter pelo menos 3 caracteres');
       } else if (field.value.length > 50) {
         isValid = false;
         showError(field, 'Campo não pode ter mais do que 50 caracteres');
       } else {
         showSuccess(field);
       }
    });
   
    // Validando idade
    if (idade.value.trim() === '') {
       isValid = false;
       showError(idade, 'Campo não pode ser vazio');
    } else if (Number(idade.value) <= 0 || Number(idade.value) >= 120) {
       isValid = false;
       showError(idade, 'Idade deve ser um número positivo e menor do que 120');
    } else {
       showSuccess(idade);
    }
   
    // Validando image (URL)
    if (image.value.trim() !== '') {
       if (!/^(ftp|http|https):\/\/[^ "]+$/.test(image.value.trim())) {
         isValid = false;
         showError(image, 'URL inválida');
       } else {
         showSuccess(image);
       }
    }
   
    if (isValid) {
       alert('Formulário enviado com sucesso');
    }
   });
   
   function showError(field, message) {
    field.className = 'error';
    field.nextElementSibling.innerHTML = message;
   }
   
   function showSuccess(field) {
    field.className = 'success';
    field.nextElementSibling.innerHTML = '';
   }

   document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nameVal = document.getElementById('nome').value;
    let sobrenomeVal = document.getElementById('descricao').value;
    let idadeVal = document.getElementById('preco').value;
    let imageVal = document.getElementById('image').value;
    let marcaVal = document.getElementById('marca').value;
    let categoriaVal = document.getElementById('categoria').value;

    let newRow = `<tr class="cor">
                    <td>${nameVal}</td>
                    <td>${sobrenomeVal}</td>
                    <td>${idadeVal}</td>
                    <td>${marcaVal}</td>
                    <td>${categoriaVal}</td>
                    <td><img src="${imageVal}" alt="Imagem do produto" class="tabela__img"></td>
                </tr>`;

    let table = document.getElementById('productsTable');
    table.innerHTML += newRow;
   })

