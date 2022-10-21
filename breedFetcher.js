const request = require("request");
const args = process.argv.splice(2);
const search = args[0];

const searchBreed = function(search) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
    if (error !== null) return console.log(error);
    const data = JSON.parse(body);
    if (data[0] === undefined) return console.log("Bread Not Found");
    console.log(data[0].description);
  });
};

searchBreed(search);
