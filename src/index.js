import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokeService from "./services/poke";
import GiphyService from "./services/giphy";
import { types } from '@babel/core';

function clearFields(){
  // $('').val(""); // if using text input
  $('.show-errors').text("");
}

// function displayTypes(response) {
//   for(let i = 0; i <= response.types; i++) {
//     if(response.types[i]) {
//       return response.types;
//     }
//   }
// }

function displayTypes(types) {
  let pokeArray = [];
  console.log(types);
  for(let i = 0; i <= 2; i++) {
    if(types[i]) {
      pokeArray.push(types[i].type.name);
    }
  }
  return pokeArray;
}


// types.length
// types[0].type.name

function displayPokeStats(name, id, types) {
  // displayTypes(types);
      $('.poke-name').append(`Name: ${name}`);
      $('.poke-id').append(`ID: ${id}`);
      $('.poke-type').append(`Type: ${displayTypes(types)}`);
    }

function displayGif(response) {
  const url = response.data[0].images.downsized.url;
  $('.show-gif').html(`<img src = '${url}' >`);
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#pokeButton').click(function() {
    // let poke = $('').val(); //input
    clearFields();
    PokeService.getPoke()
    .then(function(pokeResponse) {
      if(pokeResponse instanceof Error) {
        throw Error(`Poke API error: ${pokeResponse.message}`);
      }
      const pokeName = pokeResponse.name;
      const pokeId = pokeResponse.id;
      const pokeType = pokeResponse.types;
      
        displayTypes(pokeType);
          displayPokeStats(pokeName, pokeId, pokeType);
          console.log("pokeName: " + pokeName);
          console.log("pokeID: " + pokeId);
          console.log(pokeType);

          return GiphyService.getGiphy(pokeName, pokeId, pokeType);
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




//-----notes------

// - use promise.all ?


//-----forLoop-----

// function displayTypes(response, types) {
//   for(let i = 0; i < response.types; i++) {
//     if(response.types[i]) {
//       $('.poke-type').append(`Type: ${types}`);
//     }
//   }
// }


//-----forEach------
// function displayTypes(response) {
//   response.types.forEach(function(response) {
//     if(response.types) {
//   return response.types;
//     }
//   });
// };
