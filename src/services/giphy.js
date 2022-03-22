export default class GiphyService {
  static getGiphy(query) {
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}&q=bulbasaur&limit=1&offset=0&rating=g&lang=en`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
    }
  }