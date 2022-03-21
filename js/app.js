const URL = `http://localhost/catalogos/src/public/`;

const templateCategory = (data) => {
  data.map(({ imagen, nombre, descripcion }) => {
    console.log({ imagen, nombre, descripcion });
    template += `
        <div class="img__item item___ " >
        <img src="${imagen}" />
        <div class="item__text">
          <h2>${nombre}</h2>
          <p>${descripcion}</p>
        </div>
      </div>`;
  });
};

$.ajax({
  url: `${URL}`,
  type: "DELETE",
  success: (data) => {
    templateCategory(data);
  },
});
