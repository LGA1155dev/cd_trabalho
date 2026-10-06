        const botao = document.getElementById('meuBotao');
        const item = document.getElementById('meuItem');

        botao.addEventListener('click', () => {
            item.classList.toggle('escondido');
        });