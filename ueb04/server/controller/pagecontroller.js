"use strict";
const fhwWeb = require('fhw-web');


module.exports = {

  //Controller function for opening recipe Site and getting the recipe Data
  "loadRecipeData": function (data) {

    const recipe = fhwWeb.loadJson("recipeData");
    return ({
      "page": "rezepte",
      "data": {
        "recipe": recipe
      }
    });

  },
  //Controller function for opening recipeList Site and getting the recipe Data
  "loadRecipeListData": function (data) {

    const recipe = fhwWeb.loadJson("recipeData");
    return ({
      "page": "rezeptliste",
      "data": {
        "recipe": recipe
      }
    });
  },


  //Load RecipeData into recipe details site
  "loadRecipeDataDetail": function (data) {

    const searchedName = data.request.get.dts;
    const recipe = fhwWeb.loadJson("recipeData");

    const toLoad = fhwWeb.loadJson("recipeData").find(p => p.rezeptName.indexOf(searchedName) >= 0);
    let recipeDet = undefined;

    if (toLoad != undefined && (toLoad.rezeptName === searchedName)) {
      recipeDet = toLoad;
    }
    //When there is a wrong search term or non, prodError
    if (recipeDet === undefined || recipeDet.length == 0 || recipeDet == {}) {
      return ({
        "redirect": ("/prodError")
      });
    } else {
      return ({
        "page": "details",
        "data": {
          "recipeDet": recipeDet,
          "recipe": recipe
        }
      });

    }

  },
  //Controller function for opening recipeList Site and getting the recipe Data
  "loadjsonangular": function (data) {
    const recipe = fhwWeb.loadJson("recipeData");

    return {
      status: 200,
      json: recipe
    }
  },


  "loadRecipeDataDetailAngular": function (data) {

    const searchedName = data.request.get.dts;
    const recipe = fhwWeb.loadJson("recipeData");

    const toLoad = fhwWeb.loadJson("recipeData").find(p => p.rezeptName.indexOf(searchedName) >= 0);
    let recipeDet = undefined;

    if (toLoad != undefined && (toLoad.rezeptName === searchedName)) {
      recipeDet = toLoad;
    }


    return {
      status: 200,
      json: recipeDet
    }

  },

  //Controller function for opening recipeList Site and getting the recipe Data
  "saveRecipe": function (data) {

    const all = data.request.post;
    const toLoad = fhwWeb.loadJson("recipeData");


    const index = toLoad.indexOf(all);


    if (toLoad != undefined) {
      toLoad[0].rezeptName = "nein";
      fhwWeb.saveJson('recipeData', toLoad);
    }

    return {
      status: 200,
      json: all
    }
  }







}