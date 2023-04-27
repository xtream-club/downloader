fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      // Agrega el contenido de navbar.html al elemento con el ID "navbar"
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error(error));