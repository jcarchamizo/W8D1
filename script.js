function showAnimal() {
    const input = document.getElementById("animal").value.toLowerCase().trim();
    const image = document.getElementById("imageAnimal");
    const caption = document.getElementById("photoCaption");
  
    // Dictionary of animals
    const animals = {
      dog: "img/greyhound.jpg",
      cat: "img/cat.jpg",
      canary: "img/canary.jpg"
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