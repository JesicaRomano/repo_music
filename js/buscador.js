const getData = async () => {
  const response = await fetch ('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
}



btn.addEventListener('click', async () => {

  const character = await getData();
  character.forEach(character => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src = "${character.image}"/>
        <h2>${character.name}</h2>
        <div>${character.gender} - ${character.species}</div>
        `;
        lista.append(li);

  });
})

