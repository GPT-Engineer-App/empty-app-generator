fetch("https://api.color.pizza/v1/")
  .then((response) => response.json())
  .then((data) => {
    const colorContainer = document.getElementById("color-container");

    data.colors.forEach((color) => {
      const colorSquare = document.createElement("div");
      colorSquare.style.backgroundColor = `#${color.hex}`;
      colorSquare.classList.add("color-square");

      const colorName = document.createElement("div");
      colorName.textContent = color.name;
      colorName.classList.add("color-name");

      colorSquare.appendChild(colorName);
      colorContainer.appendChild(colorSquare);
    });
  });
