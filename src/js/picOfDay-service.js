let request = new XMLHttpRequest();
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
}

request.open("GET", url, true);
request.send();


//Example with promises
// let promise = new Promise(function(resolve, reject) {
//   let request = new XMLHttpRequest();
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//   request.onload = function() {
//     if (this.status === 200) {
//       resolve(request.response);
//     } else {
//       reject(request.response);
//     }
//   }
//   request.open("GET", url, true);
//   request.send();
// });




// export default class PicOfDay {
//   static getPic() {
//     return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
//     .then(function(response) {
//       console.log(response.json())
//       if(!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     })
//     console.log(response.json())
//     .catch(function(error) {
//       return error;
//     });
//   }
// }

// export default class PicOfDay {
//   static async getPic() {
//     try {
//       const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
//       if(!response.ok && response.status != 200) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return console.error(error.message);
//     }
//   }
// }