const URL = `http://localhost/catalogo/src/public`;
//const URL = `http://localhost/@projects/catalogo__v2/src/public`;

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
    template += `<div class="card" >
                    <div class="card__img">
                      <img src="${image}" class="img__card">
                    </div>
                    <div class="card__body">
                      <span>${name}</span>
                      <p>${price}</p>
                    </div>
                </div>`;
  });

  template += `<button type="button" class="btn__primary" id="proccess">Proccess</button>`;
  document.getElementById("data").innerHTML = template;
};
listProduct();

const FORM_DYNAMIC = [
  {
    label: "Name",
    control: "input",
    type: "text",
    placeholder: "Ingresar name",
    rules: {
      required: true,
    },
    message: {},
  },
  {
    label: "Phone",
    control: "input",
    type: "phone",
    placeholder: "Ingresar phone",
    rules: {
      required: true,
    },
  },
  {
    label: "Email",
    control: "input",
    type: "",
    placeholder: "Ingresar email",
    rules: {
      required: true,
    },
  },
  {
    label: "Coment",
    control: "textarea",
    type: "",
    placeholder: "",
    rules: {
      required: true,
    },
  },
];

const input = ({ type, label, placeholder }) => {
  return `<div class="form__group">
            <input type="${type}" name="${label}" placeholder="${
    placeholder || " "
  }" class="form__input">
            <label class="form__label">${label}</label>
          </div>
          `;
};

const textarea = ({ label, placeholder }) => {
  return `<div class="form__group textarea">
        <textarea class="form__input " name="${label}" placeholder="${
    placeholder || " "
  }"></textarea>
        <label class="form__label">${label}</label></div>
        `;
};

const templateForm = () => {
  let template = `<h1 class="display__4">Complete Information</h1>`;
  FORM_DYNAMIC.map((data) => {
    const FORM = {
      input: input(data),
      textarea: textarea(data),
    };
    template += FORM[data.control];
  });
  template += `<div class="form__group"><button class="btn__primary" id="generarOrden">Generar orden</button></div>`;
  document.getElementById("order").innerHTML = template;
};

/**Generar orden**/
document.getElementById("proccess").addEventListener("click", (e) => {
  document.getElementById("data").style.display = "none";
  templateForm();
});

const serializar = (form) => {
  const serializar = {};
  for (let { name, value } of form) if (name) serializar[name] = value;
  serializar["detalle"] = getAddCart();
  return serializar;
};

document.getElementById("order").addEventListener("submit", (e) => {
  let data = serializar(document.getElementById("order").elements);

  $.ajax({
    url: `${URL}/order/`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: (data) => {
      console.log(data);
    },
  });

  e.preventDefault();
});
