// Script para funcionalidade de Compartilhar

document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o botão de Compartilhar
    const shareButton = document.querySelector('.shareButton');

    // Verificar se a API de Compartilhamento é suportada pelo navegador
    if ('share' in navigator && shareButton) {
        // Adicionar um evento de clique ao botão de Compartilhar
        shareButton.addEventListener('click', async () => {
            try {
                // Chamar a API de Compartilhamento
                await navigator.share({
                    title: 'Título do Compartilhamento',
                    text: 'Texto do Compartilhamento',
                    url: window.location.href
                });
                console.log('Conteúdo compartilhado com sucesso!');
            } catch (error) {
                console.error('Erro ao compartilhar:', error);
            }
        });
    } else {
        console.warn('API de Compartilhamento não é suportada pelo navegador ou botão não encontrado.');
    }
});
