var diet = "";

document.getElementById("none").addEventListener("click", function(){diet = "non restricting"; sessionStorage.setItem("diet", diet);});
  document.getElementById("vegan").addEventListener("click", function(){diet = "vegan"; sessionStorage.setItem("diet", diet);});
  document.getElementById("vegetarian").addEventListener("click", function(){diet = "vegetarian"; sessionStorage.setItem("diet", diet);});
