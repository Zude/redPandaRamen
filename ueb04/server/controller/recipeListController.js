"use strict";
const fhwWeb = require('fhw-web');

module.exports = {

  //This function fills the right recipes into shopping List
  "fill": function (data) {

    const nam = data.request.post.nam;
    const amount = parseInt(data.request.post.amount);
    const ingred = fhwWeb.loadJson("recipeData").find(p => p.rezeptName.indexOf(nam) >= 0).rezeptZutaten;


    //if there is no shopping List create one
    if (typeof data.session.recipeList === 'undefined') {
      data.session.recipeList = [];
    }

    //If there is no similar recipe inside the shopping List, push it into it
    if (data.session.recipeList.filter(p => p.rezeptName.indexOf(nam) >= 0).length == 0) {
      data.session.recipeList.push({
        "rezeptName": nam,
        "rezeptAnzahl": amount,
        "ingred": ingred
      });
      for (let i = 0; i < ingred.length; i++) {
        data.session.recipeList.find(p => p.rezeptName.indexOf(nam) >= 0).ingred[i].zutatenMenge = ingred[i].zutatenMenge * amount;

      }
    }
    //If there is already the same product, just change the amount
    else {
      let oldAmount = data.session.recipeList.find(p => p.rezeptName.indexOf(nam) >= 0).rezeptAnzahl;

      data.session.recipeList.find(p => p.rezeptName.indexOf(nam) >= 0).rezeptAnzahl = oldAmount + amount;

      for (let i = 0; i < ingred.length; i++) {
        data.session.recipeList.find(p => p.rezeptName.indexOf(nam) >= 0).ingred[i].zutatenMenge += ingred[i].zutatenMenge * amount;

      }
    }

    return ({
      "redirect": "/rezepte"
    });
  },




  //Load the User Recipe Data into "einkaufsliste"
  "loadCart": function (data) {

    let ingredArray = [];
    let index = 0;
    let recipeBool = false;
    const recipeList = data.session.recipeList;

    if (typeof data.session.recipeList !== 'undefined' && recipeList.length > 0) {
      recipeBool = true;

      //Befuellt die Session mit den notwendigen Informationen
      for (let i = 0; i < recipeList.length; i++) {
        for (let x = 0; x < recipeList[i].ingred.length; x++) {
          if (ingredArray.filter(p => p.zutatenName.indexOf(recipeList[i].ingred[x].zutatenName) >= 0).length == 0) {

            ingredArray.push({
              "zutatenName": recipeList[i].ingred[x].zutatenName,
              "zutatenMenge": recipeList[i].ingred[x].zutatenMenge,
              "zutatenEinheit": recipeList[i].ingred[x].zutatenEinheit
            });
          } else {
            ingredArray.find(p => p.zutatenName.indexOf(recipeList[i].ingred[x].zutatenName) >= 0).zutatenMenge += recipeList[i].ingred[x].zutatenMenge;
          }
        }
      }
    }

    return ({
      status: 200,
      "data": {
        "recipeData": recipeList,
        "allIngreds": ingredArray,
        "recipeBool": recipeBool
      },
      "page": "einkaufsliste"
    });
  },


  //Deletes given product out of the shopping cart
  "deleteRecipe": function (data) {

    const toDeletePos = data.session.recipeList.map(function (e) {
      return e.rezeptName;
    }).indexOf(data.request.post.nam);

    //Loescht aus der Session 
    data.session.recipeList.splice(toDeletePos, 1);

    return ({
      "redirect": "/einkaufsliste"

    });
  }


}