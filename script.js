// Chave da API
var apikey = {
    key: '30b8a4a1-7e0d-4711-8aa3-e99cfaed399d'
};

// Função para formatar o preço das moedas
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {

        var coins = "";
        // Obtenha 10 moedas e símbolos
        for (let i = 0; i < 10; i++) {
            // Mostrar informações da API
            coins += `
                <div class="media">
                    <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                    </div>
                </div>
            `;
        }

        document.getElementById("coins").innerHTML = coins;

    })
    .catch((error) => {
        console.error(error.message);
    });
