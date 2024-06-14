function concluido() {
    const cep = document.getElementById('cep').value;
    const loug = document.getElementById('loug').value;
    const comp = document.getElementById('loug').value;
    const uf = document.getElementById('uf').value;
    const numero = document.getElementById('numero').value;

    if (cep != 0 && loug != 0 && comp != 0 && uf != 0 && numero != 0) {
        alert('Cadastro Concluído!');
    }
    else {
        alert('Preencha os dados corretamente!');
    }
}