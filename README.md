# **Bitcoin Quote Chrome Extension**

*Exibe a cotação do Bitcoin (BTC) em tempo real diretamente no navegador Chrome.*

---

## **Descrição**

A extensão **Bitcoin Quote** permite que você veja a cotação do Bitcoin (BTC) em relação ao real brasileiro (BRL) diretamente no seu navegador. Simples, rápida e prática para quem precisa acompanhar as oscilações do mercado de criptomoedas.

---

## **Funcionalidades**

- ✅ Exibe a cotação atual do Bitcoin (BTC) em relação ao real brasileiro (BRL).
- ✅ Atualização em tempo real com um clique.
- ✅ Interface amigável e responsiva.
- ✅ Ideal para traders, investidores e entusiastas de criptomoedas.

---

## **Pré-requisitos**

- Navegador Google Chrome (versão mais recente recomendada).
- Conexão com a internet para acessar os dados em tempo real.

---

## **Como Instalar**

### **1. Clone ou Baixe o Repositório**

1. Clone o repositório no seu computador:
   ```bash
   git clone https://github.com/SkylineNando/bitcoin-quote-extension.git
   ```
   *Ou faça o download diretamente do GitHub clicando no botão "Code" > "Download ZIP".*

2. Extraia os arquivos (caso tenha baixado o ZIP).

---

### **2. Habilite o Modo de Desenvolvedor no Chrome**

1. Abra o navegador Google Chrome.
2. Digite `chrome://extensions/` na barra de endereços e pressione Enter.
3. No canto superior direito, ative o **Modo do Desenvolvedor**.

---

### **3. Carregue a Extensão no Navegador**

1. Clique no botão **"Carregar sem compactação"**.
2. Navegue até a pasta onde os arquivos do repositório foram extraídos e selecione a pasta do projeto.
3. A extensão será carregada e aparecerá na lista de extensões instaladas.

---

## **Como Usar**

1. Após a instalação, o ícone da extensão aparecerá na barra de ferramentas do Chrome.
2. Clique no ícone da extensão para abrir o painel.
3. A cotação atual do Bitcoin será exibida no painel principal.
4. Clique no botão **"Atualizar Cotação"** para buscar os valores mais recentes.

---

## **Estrutura do Projeto**

```plaintext
bitcoin-quote-extension/
├── manifest.json  # Configuração da extensão
├── popup.html     # Interface principal
├── popup.js       # Lógica para busca da cotação
├── styles.css     # Estilo da interface
└── icons/         # Ícones da extensão
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

---

## **Como Funciona**

A extensão utiliza a API pública do **CoinGecko** para buscar a cotação do Bitcoin (BTC) em relação ao real brasileiro (BRL).  
URL da API utilizada:
```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl
```

---

## **Como Personalizar**

1. **Alterar o layout**:
   - Edite o arquivo `styles.css` para modificar o design da interface.

2. **Alterar a API ou moeda**:
   - No arquivo `popup.js`, substitua o endpoint da API para outra criptomoeda ou moeda fiat.

3. **Adicionar funcionalidades**:
   - Expanda a lógica em `popup.js` para exibir mais informações, como histórico de preços ou gráficos.

---

## **Contribuindo**

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas modificações e commit:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no repositório oficial.

---

## **Licença**

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

## **Contato**

- **Autor**: SkylineNando  
- **GitHub**: [SkylineNando](https://github.com/SkylineNando)

---

### **Dúvidas ou Sugestões?**

Sinta-se à vontade para abrir uma [issue](https://github.com/SkylineNando/bitcoin-quote-extension/issues) no repositório para dúvidas, sugestões ou problemas!

---

Agora é só copiar e colar no seu repositório no GitHub! Caso queira incluir imagens ou ícones adicionais, posso ajudar a criar ou adicionar também. 😊
