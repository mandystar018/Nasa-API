import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// usually when is more things to export import {Triangle} from './triangle.js'


$(document).ready(function() {
  let request = new XMLHttpRequest();
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      console.log(response.title);
      $('#picture-of-day').text(response.url);
      console.log(response.explanation);
      console.log(response.copyright);
      console.log(response.date);
    }
  }

  request.open("GET", url, true);
  request.send();
});