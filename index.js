"use strict";
(function() {

  var games = [{
    name: "game1",
    description: "game1 description",
    image: "game1.png",
  },
  {
    name: "game2",
    description: "game2 description",
    image: "game2.png",
  }];

  window.addEventListener("load", init);

  function init() {
    console.log("init");
    addMenuGames(games);
  }

  function menuGame(game) {
    var gameDiv = create("div");
    gameDiv.classList.add("horizontal", "game");

    var gameImage = create("img");
    gameImage.src = game.image;
    gameDiv.appendChild(gameImage);

    var gameText = create("div");
    gameText.classList.add("game-text", "vertical");
    gameDiv.appendChild(gameText);

    var gameName = create("h3");
    gameName.innerText = game.name;
    gameText.appendChild(gameName);

    var gameDescription = create("p");
    gameDescription.innerText = game.description;
    gameText.appendChild(gameDescription);

    return gameDiv;
  }

  function addMenuGames(games) {
    var test = qs("#game-modes");
    test.innerHTML = "";
    for (var i = 0; i < games.length; i++) {
      console.log(games[i]);
      test.appendChild(menuGame(games[i]));
    }
  }

  addMenuGames(games);

  // =================== HELPER FUNCTIONS =================== //

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function create(type) {
    return document.createElement(type);
  }

})();

