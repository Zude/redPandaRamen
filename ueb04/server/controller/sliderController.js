"use strict";
const fhwWeb = require('fhw-web');

module.exports = {
  "createElement": function () {


    const recipe = fhwWeb.loadJson("recipeData");


    return ({
      "page": "index",
      "data": {
        "recipe": recipe
      }
    });
  },



  "createElementSiteErr": function () {


    const recipe = fhwWeb.loadJson("recipeData");

    return ({
      "page": "siteError",
      "data": {
        "recipe": recipe
      }
    });
  }
}