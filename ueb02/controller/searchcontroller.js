"use strict";
const fhwWeb = require('fhw-web');

module.exports = {

  "search": function (data) {
    const recipe = fhwWeb.loadJson("recipeData");
    let ele = data.request.post.search;
    console.log("hez");
    console.warn('Debug message');
    let results = recipe.filter(word => ((data.request.post.rezeptname == "name") && (word.rezeptName.toLowerCase().includes(ele.toLowerCase()))) || ((data.request.post.tags == "tag") && (word.rezeptTags.some(elem => elem.toLowerCase().includes(ele.toLowerCase())))) || ((data.request.post.kategorien == "kategorie") && (word.rezeptKategorien.some(elem => elem.toLowerCase().includes(ele.toLowerCase())))) || ((data.request.post.zutaten == "zutat") && (word.rezeptZutaten.some(elem => elem.zutatenName.toLowerCase().includes(ele.toLowerCase())))));

    return ({
      "page": data.request.post.page,
      "data": {
        "recipe": results
      }
    });
  }
}