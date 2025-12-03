document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-filtro');
    const productos = document.querySelectorAll('.producto');

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            //Primero se busca el boton btn-filtro más cercano al elemento clicado
            const botonClicado = e.target.closest('.btn-filtro');

            //Se lee el filtro usando dataset
            const filtro = botonClicado.dataset.filtro;

            //Clase activa
            botones.forEach(btn => btn.classList.remove('activo'));
            botonClicado.classList.add('activo');

            //Filtrado de productos
            productos.forEach(producto => {
                //Leer la categoria del producto
                const categoriaProducto = producto.dataset.categoria;

                //Se compara la categoria del producto con la "categoria" del filtro (boton)
                if (filtro === 'todo' || filtro === categoriaProducto){
                    producto.style.display = '';
                } else {
                    producto.style.display = 'none';
                }
            });
        });
    });

    
    const btnWhatsapp = document.getElementById('btn-whatsapp');

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', (event) => {
            event.preventDefault(); 

            const mensajeInput = document.getElementById('mensaje');
            const mensaje = mensajeInput.value;

            if(mensaje.trim() === "") {
                alert("Por favor escribe tu pedido antes de enviar.");
                return;
            }

            const telefono = "526323270605";
            
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, '_blank');
        });
    }
});