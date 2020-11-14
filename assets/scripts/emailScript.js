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

handleGetMoreProducts();

