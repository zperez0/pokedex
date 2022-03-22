import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokeService from "./services/poke";
import GiphyService from "./services/giphy";

function clearFields(){
  $('').val(""); // if using text input
  $('.show-errors').text("");
}

function displayPokeStats(stats) {
  $('.poke-stats').append(`${}`);
}

function displayGif(response) {
  const url = response.data[0].images.downsized.url;
  $('.show-gif').html(`<img src = '${url}' >`);
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#button').click(function() {
    let poke = $('').val();
    clearFields();
    PokeService.getPoke()
    .then(function(pokeResponse) {
      if(pokeResponse instanceof Error) {
        throw Error(`Poke API error: ${pokeResponse.message}`);
      }
      const pokeStats = pokeResponse.poke[0].stats; // might have to change
        displayPokeStats(pokeStats);
        return PokeService.getPoke(pokeStats);
    })
      .then(function(giphyResponse) {
        if(giphyResponse instanceof Error) {
          throw Error(`Giphy API error: ${giphyResponse.message}`);
        }
        displayGif(giphyResponse);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});