const cards = document.querySelector(".cards");

function Product(title, price, description, image) {
  this.title = title;
  this.price = price;
  this.description = description;
  this.image = image;
}

let arr = [];
let html;
fetch("https://fakestoreapi.com/products?limit=20")
  .then(res => res.json())
  .then(json => {
    let x;
    for (let i = 0; i < 20; i++) {
      x = new Product(
        json[i].title,
        json[i].price,
        json[i].description,
        json[i].image
      );
      arr.push(x);
    }
    html = (title, price, description, image) => {
      return `
      <div class="card">
        <img src="${image}" alt="Placeholder Image" />
        <h1>${title}</h1>
        <h2>${price}</h2>
        <h2>${description}</h2>
      </div>
      `;
    };
    console.log(arr);
    arr.map(element => {
      cards.innerHTML += html(
        element.title,
        element.price,
        element.description,
        element.image
      );
    });
  });
