async function fetchBitcoinQuote() {
  const quoteElement = document.getElementById("quote");
  try {
    // Obtendo a cotação do Bitcoin (BTC) em relação ao BRL
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl");
    const data = await response.json();
    const brlRate = data.bitcoin.brl;
    quoteElement.textContent = `1 BTC = R$ ${brlRate.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
  } catch (error) {
    quoteElement.textContent = "Erro ao carregar cotação.";
    console.error(error);
  }
}

document.getElementById("refresh").addEventListener("click", fetchBitcoinQuote);

fetchBitcoinQuote(); // Atualizar ao abrir
