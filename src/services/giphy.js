export default class GiphyService {
  static async getGiphy(keyword) {
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${process.env.GIPHY_API_KEY}&q=bulbasaur&limit=1&offset=0&rating=g&lang=en`)
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