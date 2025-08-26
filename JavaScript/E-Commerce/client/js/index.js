const shopContent = document.getElementById("shopContent");
const cart = []; //Este es nuestro carrito, un array vacio donde guardaremos los productos que el usuario agregue al carrito

productos.forEach((product) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.image}">
    <h3>${product.productName}</h3>
    <p>${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        cart.push({
            id: product.id,
            image: product.image,
            productName: product.productName,
            price: product.price,
            quantity: product.quantity,
            });
            console.log(cart);})
            
});