function scrollPageHelp() {
  window.scrollTo(200, 390);
}

function scrollPageSelection() {
  window.scrollTo(200, 780);
}

function scrollPageShare() {
  window.scrollTo(200, 2500);
}

function handleToggleAccordion() {
  if (window.innerWidth >= 1025) return;

  document
    .getElementById("help-text")
    .classList.toggle("show-help-text");
  document.getElementById("arrow-icon").classList.toggle("arrow-icon-rotate");
}

let nextPage =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

function handleGetMoreProducts() {
  fetch(nextPage, {
    method: "GET",
    headers: new Headers(),
  })
    .then((res) => res.json())
    .then((data) => {
      const productsElement = document.getElementById("products");

      const { products } = data;

      products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const productImageElement = document.createElement("img");
        productImageElement.src = `${product.image}`;
        productImageElement.alt = product.name;

        const productDetailElement = document.createElement("div");

        const productNameElement = document.createElement("span");
        productNameElement.classList.add("product-name");
        productNameElement.innerHTML = product.name;

        const productDescriptionElement = document.createElement("span");
        productDescriptionElement.classList.add("product-description");
        productDescriptionElement.innerHTML = product.description;

        const productOldPriceElement = document.createElement("span");
        productOldPriceElement.classList.add("product-old-price");
        productOldPriceElement.innerHTML = `De: R$${product.oldPrice}`;

        const productPriceElement = document.createElement("span");
        productPriceElement.classList.add("product-price");
        productPriceElement.innerHTML = `Por: R$${product.price}`;

        const productObsElement = document.createElement("span");
        productObsElement.classList.add("product-obs");
        productObsElement.innerHTML = `Ou ${product.installments.count}x de R$${product.installments.value}`;

        productElement.appendChild(productImageElement);

        productDetailElement.appendChild(productNameElement);
        productDetailElement.appendChild(productDescriptionElement);
        productDetailElement.appendChild(productOldPriceElement);
        productDetailElement.appendChild(productPriceElement);
        productDetailElement.appendChild(productObsElement);

        productElement.appendChild(productDetailElement);

        productsElement.appendChild(productElement);
      });

      nextPage = `https://${data.nextPage}`;
    })
    .catch((err) => {
      alert("Ocorreu um erro ao carregar os produtos!");
    });
}

function handleSubmit(event) {
  event.preventDefault();

  alert("Formulário enviado com sucesso!");
}

handleGetMoreProducts();

document.getElementById("helpForm").addEventListener("submit", handleSubmit);

document.getElementById("newsletter").addEventListener("submit", handleSubmit);
