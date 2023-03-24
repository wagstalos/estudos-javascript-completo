var nameCategory = "carros";
localStorage.setItem("Categoria", nameCategory);


if (localStorage.getItem("Categoria") === "carros") {
  alert(nameCategory);
}


//localStorage.removeItem('Categoria')