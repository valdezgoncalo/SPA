function adaptarFormulario() {
    const cat = document.getElementById('categoria-spa').value;
    const label1 = document.getElementById('label-medida-1');
    const label2 = document.getElementById('label-medida-2');
    const input2 = document.getElementById('valor-2');

    switch(cat) {
        case 'hotel':
            label1.innerText = "N.º de Estrelas";
            label2.innerText = "N.º de Quartos";
            input2.type = "number";
            break;
        case 'restaurante':
        case 'cafe':
            label1.innerText = "Área Pública (m²)";
            label2.innerText = "Lotação (Lugares)";
            break;
        case 'loja':
        case 'ginasio':
            label1.innerText = "Área Total (m²)";
            label2.innerText = "N.º de Ecrãs/TVs";
            break;
        default:
            label1.innerText = "Área (m²)";
            label2.innerText = "Lotação";
    }
}
