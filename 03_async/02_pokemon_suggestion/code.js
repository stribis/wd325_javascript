let state = {
  suggestedPokemon: [], // array to store the pokemon suggested by the API
  offset: 0, // offset to manage pagination for getching pokemon in batches
  currentIndex: 0, // the index of the current pokemon being displayed
  currentData: {},
};

getSuggestedPokemon();

async function getSuggestedPokemon() {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${state.offset}`;
  const response = await fetch(pokeUrl);
  const data = await response.json();

  const results = data.results; // this will always be the array of pokemon
  console.log(results);
  /* 
  TODO:
    We need to fetch additional data for each pokemon, such as image and types.
    Because the API only returns the basic information (name, url)
    And we need to fetch the additional information (image and types)

    The `await Promise.all()` ensures all Pokemon data is fetched before proceeding
  */

  getCurrentPokemon(results[state.currentIndex].url);

  state.suggestedPokemon = results;
}

async function getCurrentPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();

  const pokemonData = {
    img: data.sprites.other['official-artwork'].front_default,
    typing: [...data.types],
  };
  state.currentData = pokemonData;
  console.log(pokemonData);
  displayCurrentPokemon();
}

function displayCurrentPokemon() {
  const pokemonContainer = document.querySelector(
    '.pokemon__container'
  );
  pokemonContainer.innerHTML = ''; // clear the container
  const card = document.createElement('div');
  card.classList.add('pokemon__card');
  // TODO: How about Image, types
  const template = `<div>${
    state.suggestedPokemon[state.currentIndex].name
  }
 <img class="pokemon__image" src="${state.currentData.img}"> 
 <ul>
  <li>${
    state.currentData.typing[0]
      ? state.currentData.typing[0].type.name
      : 'NONE'
  }</li>
  <li>${
    state.currentData.typing[1]
      ? state.currentData.typing[1].type.name
      : 'NONE'
  } </li>
 </ul>
 </div>`;

  card.innerHTML = template;

  pokemonContainer.appendChild(card);
}

function handleSkip() {
  const card = document.querySelector('.pokemon__card');
  card.classList.add('skip-animation');
  card.addEventListener(
    'transitionend',
    () => {
      console.log('Transition is finished');
      state.currentIndex++;
      // If the current index exceeds the length of the array, then we get the next batch
      if (state.currentIndex >= state.suggestedPokemon.length) {
        state.offset += 20; // increment the offset by 20 to fetch the next batch
        getSuggestedPokemon();
      } else {
        // Display the "new" current pokemon
        getCurrentPokemon();
      }
    },
    { once: true }
  ); // ensure that the event listener only runs once);
}

function handleLike() {
  const card = document.querySelector('.pokemon__card');
  card.classList.add('like-animation');
  card.addEventListener(
    'transitionend',
    () => {
      console.log('Transition is finished');
      state.currentIndex++;
      // If the current index exceeds the length of the array, then we get the next batch
      if (state.currentIndex >= state.suggestedPokemon.length) {
        state.offset += 20; // increment the offset by 20 to fetch the next batch
        getSuggestedPokemon();
      } else {
        // Display the "new" current pokemon
        getCurrentPokemon(
          `https://pokeapi.co/api/v2/pokemon/${
            state.currentIndex + 1
          }/`
        );
      }
    },
    { once: true }
  ); // ensure that the event listener only runs once);
}

document
  .querySelector('.controls__skip-button')
  .addEventListener('click', handleSkip);
document
  .querySelector('.controls__like-button')
  .addEventListener('click', handleLike);
