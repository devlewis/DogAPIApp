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

  $('.results').empty();
  $('.results').append(`<h2>Your results!</h2>`);
  // $('.results').append(
  //   // responseJson.message.forEach(
  //   //   x => `<img src="${responseJson.message[x]}" class="results-img">`));
  for (let i = 0; i < responseJson.message.length; i++){
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    )}
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