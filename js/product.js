const URL = `http://localhost/catalogos/src/public`;

const templateProduct = (data) => {
  let template = "";
  data.map(({ id, image, name }) => {
    template += `
          <div class="img__item item___ " >
          <img src="${image}" />
          <div class="item__text" >
            <h2>${name}</h2>
            <p class="container__button">
            <button class="btn" data-id=${id}>+agregar</button>
            </p>
          </div>
        </div>`;
  });

  $("#product").html(template);
};

const product = () => {
  const idCategory = +localStorage.getItem("__ID__");
  $.ajax({
    url: `${URL}/product/`,
    type: "GET",
    data: { idCategory },
    success: (data) => {
      templateProduct(data);
    },
  });
};

product();
let carrito = [];
const data = document.querySelector("#product");
data.addEventListener("click", ({ target }) => {
  const id = +target.getAttribute("data-id") || null;
  $.ajax({
    url: `${URL}/product/`,
    type: "GET",
    data: { id, parameters: "SHOW" },
    success: (data) => carrito.push(data),
  });
  localStorage.setItem("__add__", JSON.stringify(carrito));
});
