const MY_API_KEY = '225c27f6e7mshfe7771560896d7cp197b05jsnf4871ea9af27';

(function onLoad()
{
    setButtonFunctions();
    getCurrencyExchangeRates();
    
})();

function setButtonFunctions()
{
    document.getElementById('buttonCurrency').onclick = getCurrencyExchangeRates;
}

async function getCurrencyExchangeRates()
{
    const from = document.getElementById('inputCurrencyFrom').value;
    const to = document.getElementById('inputCurrencyTo').value;
    await fetch("https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=" + from + "&to=" + to, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": MY_API_KEY
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Currency Exchange API object:");
        console.log(response);
        console.log("\n");
        document.getElementById('currencyResult').innerHTML = response;
    })
    .catch(err => {
        console.log(err);
    });
}