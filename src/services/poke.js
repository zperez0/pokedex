export default class PokeService {
  static getPoke(){
    return fetch(`https://pokeapi.co/api/v2/pokemon/1`)
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