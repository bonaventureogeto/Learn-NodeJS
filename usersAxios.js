const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
