const URL = `http://localhost/@projects/catalogo__v2/src/public`;
const templateProduct = (data) => {
  let template = "";
  data.map(({ id, image, name }) => {
    template += `
          <div class="img__item item___ " >
          <img src="${image}" />
          <div class="item__text" data-id=${id}>
            <h2>${name}</h2>
            <p></p>
          </div>
        </div>`;
  });

  $("#product").html(template);
};

const product = () => {
  const idCategory = +localStorage.getItem("__ID__");
  console.log(idCategory);
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
