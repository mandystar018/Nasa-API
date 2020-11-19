import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PicOfDay from './js/picOfDay-service.js'

$(document).ready(function() {
  $('#picOfDay').click(function() {
    let promise = PicOfDay.getPic();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#picture-of-day').append(`<p>${body.title}</p>`);
      $('#picture-of-day').append(`<img src="${body.url}">`);
      $('#picture-of-day').append(`<p>${body.explanation}</p>`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});