export default class GiphyService {
  static async getGiphy() {
    try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=bulbasaur&limit=1&offset=0&rating=g&lang=en`)
    if(!response.ok) {
      throw Error(response.statusText)
    }
    return response.json();
  } catch (error) {
    return error.message; 
    }
  }
}