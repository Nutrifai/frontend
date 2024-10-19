// Adiciona event listeners para os links de navegação
document.getElementById('cadastro').addEventListener('click', event => {
    event.preventDefault();
    mostrarFormulario('cadastro');
});

document.getElementById('assinatura').addEventListener('click', event => {
    event.preventDefault();
    mostrarFormulario('assinatura');
});

// Inicia com o formulário de login visível
mostrarFormulario('login');

// Função para carregar conteúdo HTML em um elemento
function carregarConteudo(url, elementoId, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementoId).innerHTML = data;
            callback(); // Chama a função de callback, se fornecida
        })
        .catch(error => console.error(error));
}

// Função para mostrar um formulário específico
function mostrarFormulario(formType) {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    if (formType === 'cadastro') {
        carregarConteudo('./cadastro.html', 'form2', () => {
            form1.style.display = 'none';
            form2.style.display = 'block';
            form3.style.display = 'none'; // Esconder form3 se estiver visível

            const voltarLoginBtn = document.getElementById('login');
            if (voltarLoginBtn) {
                voltarLoginBtn.addEventListener('click', event => {
                    event.preventDefault();
                    mostrarFormulario('login');
                });
            }
        });
    } else if (formType === 'assinatura') {
        carregarConteudo('./assinatura.html', 'form3', () => {
            form1.style.display = 'none';
            form2.style.display = 'none'; // Esconder form2 se estiver visível
            form3.style.display = 'block'; // Mostrar form3

            const voltarLoginBtn = document.getElementById('voltarLoginAssinatura');
            if (voltarLoginBtn) {
                voltarLoginBtn.addEventListener('click', event => {
                    event.preventDefault();
                    mostrarFormulario('login');
                });
            }
        });
    } else if (formType === 'login') {
        form3.style.display = 'none'; // Esconder form3 se estiver visível
        form2.style.display = 'none'; // Esconder form2 se estiver visível
        form1.style.display = 'block'; // Mostrar form1
    }
}
