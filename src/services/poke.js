export default class PokeService {
  static async getPoke(){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}