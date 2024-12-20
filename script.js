function updateTotal() {
    // Obtém os valores dos campos de entrada
    let serviceValue = parseFloat(document.getElementById("service-value").value.replace(",", "."));
    let partsValue = parseFloat(document.getElementById("parts-value").value.replace(",", "."));

    // Verifica se os valores são números válidos, caso contrário, define como 0
    serviceValue = isNaN(serviceValue) ? 0 : serviceValue;
    partsValue = isNaN(partsValue) ? 0 : partsValue;

    // Calcula o total
    let totalValue = serviceValue + partsValue;

    // Atualiza o campo "VALOR TOTAL" com a soma, formatando como moeda brasileira
    document.getElementById("total-value").value = formatCurrency(totalValue);
}

// Função para formatar os valores como moeda brasileira
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', 'R$ ').replace('.', ',');
}

// Função que aciona a impressão ao clicar no botão
function printPage() {
    window.print(); // Isso abre a janela de impressão padrão do navegador
}
