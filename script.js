// Chave da API
var apikey = {
    key: '30b8a4a1-7e0d-4711-8aa3-e99cfaed399d'
};

// Função para formatar o preço das moedas
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

function fetchCryptocurrencyData() {
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
        .then((response) => {
            if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
            return response.json();
        })
        .then((api) => {
            var cryptoList = document.getElementById("crypto-list");

            api.data.forEach((crypto) => {
                var cryptoItem = document.createElement("div");
                cryptoItem.classList.add("crypto-item");

                cryptoItem.innerHTML = `
                    <div class="crypto-info">
                        <h2>${crypto.name} (${crypto.symbol})</h2>
                        <p>ID: ${crypto.id}</p>
                        <p>Rank: ${crypto.rank}</p>
                        <p>Ativo: ${crypto.is_active ? "Sim" : "Não"}</p>
                        <p>Primeira Dados Históricos: ${crypto.first_historical_data}</p>
                        <p>Últimos Dados Históricos: ${crypto.last_historical_data}</p>
                    </div>
                `;

                cryptoList.appendChild(cryptoItem);
            });
        })
        .catch((error) => {
            console.error(error.message);
        });
}

fetchCryptocurrencyData();