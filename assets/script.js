// Llamamos al archivo JSON
fetch('config_cards.json')
.then(response => response.json())
.then(data => {
  // Obtenemos el contenedor de las cards
  const cardContainer = document.getElementById('card-container');

  // Generamos una card por cada objeto en el archivo JSON
  data.cards.forEach(card => {
    // Creamos el HTML de la card
    const cardHtml = `
      <div class="col">
        <a href="${card.link}" class="card-link text-white" target="_blank">
          <div class="card shadow-sm h-100">
            <div class="card-body text-center">
              <i class="fa-brands ${card.icon}"></i>
              <h5 class="card-title mt-3">${card.title}</h5>
              <p class="card-text">${card.description}</p>
            </div>
          </div>
        </a>
      </div>
    `;
    
    // Agregamos la card al contenedor
    cardContainer.innerHTML += cardHtml;
  });
});