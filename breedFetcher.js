const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let description = null;
    if (error !== null) return callback(error, description);
    const data = JSON.parse(body);
    if (data[0] === undefined) return callback(error, "Breed Not Found");
    description = data[0].description;
    return callback(error, description);
  });
};

module.exports = { fetchBreedDescription };
