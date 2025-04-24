function getRickAndMortyCharacters() {
    const RyMNameInput = document.getElementById('characterInput');
    const DivRenderCharacter = document.getElementById('renderCharacter');

    const nameToLowercase = RyMNameInput.value.toLowerCase();
    
    fetch(`http://localhost:3000/characters${nameToLowercase}`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            DivRenderCharacter.innerHTML = `<p>El personaje seleccionada no tiene coincidencia</p>`;
            return;
        } else {
        const { name, Status, Species, gender, origin, image} = data;
        DivRenderCharacter.innerHTML = `
                <h2>${name}</h2>
                <ul>
                <li>Status: ${Status}</li>
                <li>Species: ${Species}</li>
                <li>Gender: ${gender}</li>
                <li>Origin: ${origin.name}</li>
                <li>URL: ${origin.url}</li>
                </ul>
                <img src="${image}" alt="${name}">
          `;   
        }
    })
    .catch(error => DivRenderCharacter.innerHTML = `<p>El personaje seleccionada no tiene coincidencia</p>`);  
}
