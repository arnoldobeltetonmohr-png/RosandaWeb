// scripts para comprar
function calcularTotal() { 
    
    let precios_unitario = {
    optimo: [780, 65 ], //Precio de Caja y Precio de Carton
    extragrande: [684, 57],
    grande: [588, 49],
    mediano: [552,46],
    Pequeño: [480,40]
    };
    let precio_u = {}
    
    console.log(precios_unitario.mediano[0]); // 552
    // Seleccionando el tipo de
    let select = document.getElementById("tipo_huevo");

    // opción seleccionada
    let opcion = select.options[select.selectedIndex];

    // obtener el data-desc
    let tipo_h = opcion.dataset.desc;

    console.log(tipo_h); // "mediano", por ejemplo
    // let tipo_h = document.getElementById("tipo_huevo").value;

    // Unidad de Medida
    let unidad_med = document.getElementById("medida").value;

    // Busca descripción de unidad de Medida
    let selectMedida = document.getElementById("medida");
    let opcionMedida = selectMedida.options[selectMedida.selectedIndex];
    // obtener el data-desc
    let unidad_med_desc = opcionMedida.dataset.desc;

    let precio = precios_unitario[tipo_h][unidad_med];
    let cantidad = document.getElementById("cantidad").value;
    //alert("Regristrando tu pedido \n Se requieren "+ cantidad+" "+unidad_med_desc+" de Huevo a precio "+precio);

    let total = precio * cantidad;

    document.getElementById("total").innerText = total;
    // producto
    let producto = document.getElementById("producto").value;
    //alert("Calculando el total del pedido \n Se requieren "+ cantidad+" "+unidad_med_desc+" de "+producto+" "+tipo_h+"\n a precio unitario de  "+precio+" para un total de "+total);

    //alert("Rutina Cálculo ✅");
}
//Validación Original

    const form = document.querySelector('.pedido-form');
    const mensajeExito = document.getElementById('mensaje-exito');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que recargue la página

        let precios_unitario = {
            optimo: [780, 65 ], //Precio de Caja y Precio de Carton
            extragrande: [684, 57],
            grande: [588, 49],
            mediano: [552,46],
            Pequeño: [480,40]
        };
        let precio_u = {}
    
        console.log(precios_unitario.mediano[0]); // 552
    

        let nombre = document.getElementById("nombre").value.trim();
        console.log("entra Validacion");
        if (nombre.trim() === "") {
            alert("Por favor ingrese su nombre");
            return;
        }
        // Seleccionando el tipo de
        let select = document.getElementById("tipo_huevo");

        // opción seleccionada
        let opcion = select.options[select.selectedIndex];

        // obtener el data-desc
        let tipo_h = opcion.dataset.desc;

        console.log(tipo_h); // "mediano", por ejemplo
        // let tipo_h = document.getElementById("tipo_huevo").value;

        // Unidad de Medida
        let unidad_med = document.getElementById("medida").value;

        // Busca descripción de unidad de Medida
        let selectMedida = document.getElementById("medida");
        let opcionMedida = selectMedida.options[selectMedida.selectedIndex];
        // obtener el data-desc
        let unidad_med_desc = opcionMedida.dataset.desc;

        let precio = precios_unitario[tipo_h][unidad_med];
        let cantidad = document.getElementById("cantidad").value;
        //alert("Regristrando tu pedido \n Se requieren "+ cantidad+" "+unidad_med_desc+" de Huevo a precio "+precio);

        let total = precio * cantidad;

        document.getElementById("total").innerText = total;
        // producto
        let producto = document.getElementById("producto").value;
        // alert("Enviando el pedido \n Se requieren "+ cantidad+" "+unidad_med_desc+" de "+producto+" "+tipo_h+"\n a precio unitario de  "+precio+" para un total de "+total);
        // Negocio
        let negocio = document.getElementById("negocio").value;
        // Dirección de entrega
        let direccion = document.getElementById("direccion").value;
        // tipo de cliente
        let tipo_cliente = document.getElementById("tipo_cliente").value;

        // Si todo está bien
        //alert("El Formulario es válido ✅");
        
        mensajeExito.style.display = 'block';
        // 🔥 Saber qué botón se presionó
        let accion = e.submitter.value;

        if (accion === "whatsapp") {
            
            enviarWhatsApp(nombre, cantidad, unidad_med_desc, producto, tipo_h, precio, total,negocio, direccion, tipo_cliente);
        }

        if (accion === "Base de Datos") {
             guardarEnBD(nombre, producto, cantidad);
         }
        form.reset();

        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 5000);
    });







function enviarWhatsApp(nombre, cantidad, unidad_med_desc, producto, tipo_h, precio, total,negocio,direccion,tipo_cliente) {

    // Crear mensaje
    let Textomensaje = `PEDIDO WEB AUTOMÁTICO
    PARA FRESCO GALAN
    ____________________________________________________________
    Cliente  :  ${nombre}
    Negocio  :  ${negocio}
    direccion:  ${direccion}
    Segmento :  ${tipo_cliente}

    Medida   :  ${unidad_med_desc} 
    Cantidad :  ${cantidad} 
    Producto :  ${producto}
    Tamaño   :  ${tipo_h} 
    Unitario :  ${precio} 
    Total de    ${total}

    Por favor procesar este pedido.`;
    
    // Hola 👋, soy ${nombre}. Estoy interesado en ${cantidad} ${unidad_med_desc} de ${producto} ${tipo_h} a un precio unitario de  ${precio} para un total de ${total}.`;
    
    // alert(Textomensaje);
    // validando en consola
    console.log(Textomensaje);
    
    // Codificar mensaje para URL
    let mensajeCodificado = encodeURIComponent(Textomensaje);
    

    // Número de WhatsApp (cambiar por el tuyo)
    let telefono = "50251465011";

    // Validar tamaño del mensaje
    if (Textomensaje.length > 1500) {
        alert("El mensaje es demasiado largo");
        } else {
        // Crear URL
        let url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
        
        // Abrir WhatsApp
        window.location.href = url;
        //window.open(url, "_blank");        
        }

    //alert("Pedido enviado al whatsapp correctamente ✅");


   
}

function guardarEnBD(nombre, producto, cantidad) {
    alert("Pedido guardado en base de datos (simulado) 📦");

    console.log({
        nombre,
        producto,
        cantidad
    });
}

// Para Forma de Pago

    const formaPago = document.querySelector('select[name="forma_pago"]');
    const datosTransferencia = document.getElementById('datos-transferencia');
    const bancoInput = document.querySelector('input[name="banco"]');
    const boletaInput = document.querySelector('input[name="boleta"]');

    formaPago.addEventListener('change', function() {
        if (this.value === "Transferencia Bancaria") {
            datosTransferencia.style.display = "grid";
            bancoInput.setAttribute("required", "required");
            boletaInput.setAttribute("required", "required");
        } else {
            datosTransferencia.style.display = "none";
            bancoInput.removeAttribute("required");
            boletaInput.removeAttribute("required");
        }
    });
