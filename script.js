const boton = document.getElementById("alertBtn");
const contenedor = document.getElementById("alertContainer");

boton.addEventListener("click", () => {
    contenedor.innerHTML = `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            Alerta, alguien presionó el botón
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
});