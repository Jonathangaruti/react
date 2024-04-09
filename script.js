document.addEventListener("DOMContentLoaded", function () {
  const h2titulos = document.querySelectorAll("h2");

  h2titulos.forEach((h2) => {
    h2.addEventListener("mouseover", () => {
      h2.style.color = "black";
      h2.style.backgroundColor = "#98eded";
      h2.style.transition = "background-color 0.3s ease";
    });

    h2.addEventListener("mouseout", () => {
      h2.style.color = "#7cdaf9";
      h2.style.backgroundColor = "";
    });
  });
});