// const URL = `http://localhost/catalogos/src/public`;
const URL = `http://localhost/@projects/catalogo__v2/src/public`;

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

(function () {
  const id = +localStorage.getItem("__ID__");
  $.ajax({
    url: `${URL}/category/`,
    type: "GET",
    data: { id, parameters: null },
    success: (data) => {
      document.getElementById("titleCategory").innerText = data.name;
      templateProduct(data.product);
    },
  });
})();

const getAddCart = () => JSON.parse(localStorage.getItem("__add__")) || [];

const countCart = () => {
  const count = getAddCart();
  document.getElementById("countAddCart").innerText = count.length;
};

countCart();

/*ADD*/

const data = document.querySelector("#product");

const agregarCarrito = (data) => {
  let carrito = getAddCart();
  carrito.push(data);
  localStorage.setItem("__add__", JSON.stringify(carrito));
};

data.addEventListener("click", ({ target }) => {
  const id = +target.getAttribute("data-id") || null;
  $.ajax({
    url: `${URL}/product/`,
    type: "GET",
    data: { id, parameters: "SHOW" },
    success: (data) => {
      agregarCarrito(data);
      countCart();
    },
  });
});

/*LISTADO DEL CARRITO*/

const listProduct = () => {
  const data = getAddCart();
  let template = "";
  data.map(({ name, image, price }) => {
    template += `

                <div class="card" >
                    <div class="card__img">
                      <img src="${image}" class="img__card">
                    </div>
                    <div class="card__body">
                      <span>${name}</span>
                      <p>${price}</p>
                    </div>
                </div>
                  
          
                `;
  });
  document.getElementById("data").innerHTML = template;
};

listProduct();
