const calcular = document.getElementById('calcular');


function valorfuturo() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const taxa = document.getElementById('taxa').value;
    const meses = document.getElementById('meses').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && valor !== '' && taxa !== '' && meses !== '') {


        const i = taxa/100;
        const valorf = ((((1 + i)**meses-1)*valor)/i).toFixed(2);



        resultado.textContent = `Olá, ${nome}, se você aplicar R$ ${valor}, à taxa de juros de ${taxa}% ao mês, durante ${meses} meses, acumulará uma poupança de R$ ${valorf}`;

    } else {
        resultado.textContent = 'Para calcular o seu VFP , preencha todos os campos.';
    }

}
calcular.addEventListener('click', valorfuturo);