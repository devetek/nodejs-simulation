const http = require('http');
const https = require('https');

let incomingRequest = 0;
const array = [];

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxCeil = Math.floor(max);
  return Math.floor(Math.random() * (maxCeil - minCeil) + minCeil); //The maximum is exclusive and the minimum is inclusive
}

function fibo(n) {
  if (n < 2) return 1;
  return fibo(n - 2) + fibo(n - 1);
}

function callApi() {
  https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
    const { statusCode } = res;

    console.log("API Call Status Code: ", statusCode);

    if (statusCode !== 200) {
      console.log('Error call API!');
      return '';
    }
    
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  });
}

//create a server object:
http
  .createServer(function(req, res) {
    incomingRequest +=1;
    console.log("Total Request: ", incomingRequest);
    callApi();
    setInterval(() => {
      const rand = Math.random();
      const fiboz = fibo(getRandomInt(0, 10));
      console.log(rand, ' & ', fiboz);
      array.push(rand);

      if (array.length === 10000000000) {
        array = [];
      }
    }, 1000);

    setTimeout(() => {
      res.write('Hello World!'); //write a response to the client
      res.end(); //end the response
    }, 5000);
  })
  .listen(8080); //the server object listens on port 8080
