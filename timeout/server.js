// test this node with bash for ((i=1;i<=100;i++)); do   curl -v "localhost:8080" --connect-timeout 1; done
const http = require('http');

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

//create a server object:
http
  .createServer(function(req, res) {
    setInterval(() => {
      const rand = Math.random();
      const fiboz = fibo(getRandomInt(0, 10));
      console.log(rand, ' & ', fiboz);
      array.push(rand);
    }, 1000);

    setTimeout(() => {
      res.write('Hello World!'); //write a response to the client
      res.end(); //end the response
    }, 5000);
  })
  .listen(8080); //the server object listens on port 8080
