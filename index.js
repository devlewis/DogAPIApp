'use strict';

function getDogImage() {
  const num = $('#input').val()
  $('#input').val('')
  fetch('https://dog.ceo/api/breeds/image/random/'.concat(num))
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    responseJson.message.forEach(
      x => `<img src="${responseJson.message[x]}" class="results-img">`));
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});