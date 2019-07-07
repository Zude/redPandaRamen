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

  //Controller function for saving admin name changes
  "saveRecipe": function (data) {

    const id = data.request.post.id;
    const newName = data.request.post.rezeptName;

    const toLoad = fhwWeb.loadJson("recipeData");

    if (toLoad != undefined) {

      toLoad.find(p => p.id.indexOf(id) >= 0).rezeptName = newName;

      fhwWeb.saveJson('recipeData', toLoad);
    }

    return {
      status: 200,
      json: toLoad
    }
  },


  //Load RecipeData into recipe details site
  "dataSearch": function (data) {

    const searchedName = data.request.get.name;
    const recipe = fhwWeb.loadJson("recipeData");

    const toLoad = fhwWeb.loadJson("recipeData").filter(p => p.rezeptName.indexOf(searchedName) >= 0);
    let recipeDet = undefined;

    if (toLoad != undefined && (toLoad.rezeptName === searchedName)) {
      recipeDet = toLoad;
    }


    return {
      status: 200,
      json: toLoad
    }

  }







}