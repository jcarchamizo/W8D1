function mostrarAnimal() {
    const input = document.getElementById("animal").value.toLowerCase().trim();
    const image = document.getElementById("imagenAnimal");
    const caption = document.getElementById("pieFoto");
  
    // Dictionary of animals
    const animals = {
      dog: "https://cdn.pixabay.com/photo/2016/02/19/11/53/dog-1207816_1280.jpg",
      cat: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
      canary: "https://cdn.pixabay.com/photo/2020/01/10/15/10/canary-4754474_1280.jpg"
    };
  
    if (animals[input]) {
      image.src = animals[input];
      image.alt = input;
      image.style.display = "block";
      caption.textContent = input.charAt(0).toUpperCase() + input.slice(1);
    } else {
      image.style.display = "none";
      caption.textContent = "Animal not available";
    }
  }