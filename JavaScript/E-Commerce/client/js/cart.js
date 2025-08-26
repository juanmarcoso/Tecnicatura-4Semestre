// Elementos del modal
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

// Boton del carrito
const cartBtn = document.getElementById("cart-btn");

// Array del carrito
const displayCart = () => {

    modalContainer.innerHTML = ""; // Limpiar el contenido previo del modal
    
    // Mostrar el modal (por defecto esta oculto en el CSS)
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    // Modal header
    const modalHeader = document.createElement("div");

    // Modal close button
    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    // Close modal event
    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    // Close modal event
    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito.";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    // Append modal header to modal container
    modalContainer.append(modalHeader);
};

cartBtn.addEventListener("click", displayCart);