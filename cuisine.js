var cuisine = "";

document.getElementById("chinese").addEventListener("click", function(){cuisine = "chinese"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("mexican").addEventListener("click", function(){cuisine = "mexican"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("italian").addEventListener("click", function(){cuisine = "italian"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("indian").addEventListener("click", function(){cuisine = "indian"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("korean").addEventListener("click", function(){cuisine = "korean"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("japanese").addEventListener("click", function(){cuisine = "japanese"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("jamaican").addEventListener("click", function(){cuisine = "jamaican"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("american").addEventListener("click", function(){cuisine = "american"; sessionStorage.setItem("cuisine", cuisine);});
  document.getElementById("philippine").addEventListener("click", function(){cuisine = "philippine"; sessionStorage.setItem("cuisine", cuisine);});

  function chooseRandomCuisine() {
    const cuisines = [
      "chinese",
      "mexican",
      "italian",
      "indian",
      "korean",
      "japanese",
      "jamaican",
      "american",
      "philippine"
    ];
    const randomIndex = Math.floor(Math.random() * cuisines.length);
    return cuisines[randomIndex];
  }

  document.getElementById("random").addEventListener("click", function(){cuisine = chooseRandomCuisine(); sessionStorage.setItem("cuisine", cuisine);});
