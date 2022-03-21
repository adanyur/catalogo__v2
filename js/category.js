const URL = `http://localhost/@projects/catalogo__v2/src/public`;

const templateCategory = (data) => {
  let template = "";
  data.map(({ id, image, name, descripcion }) => {
    template += `<a href="product.html">
        <div class="img__item item___ " >
        <img src="${image}" />
        <div class="item__text" data-id=${id}>
          <h2>${name}</h2>
          <p>${descripcion || ""}</p>
        </div>
      </div></a>`;
  });

  $("#category").html(template);
};

$.ajax({
  url: `${URL}/category/`,
  type: "GET",
  success: (data) => {
    templateCategory(data);
  },
});

const data = document.querySelector("#category");
data.addEventListener("click", ({ target }) => {
  const idCategory = +target.getAttribute("data-id") || null;
  localStorage.setItem("__ID__", idCategory);
});
