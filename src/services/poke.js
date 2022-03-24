export default class PokeService {
  static async getPoke(){
    return await fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response.json();
    })
      .catch(function(error) {
      return error.message;
    });
  }
}

// https://pokeapi.co/api/v2/pokemon-form/1/