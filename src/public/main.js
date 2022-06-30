import {loadProducts,saveMenssage,loadMessages,newMessage} from './sockets.js'; 

const divProductos = document.getElementById('productos');
const mail = document.getElementById('mail');
const nombre = document.getElementById('nombre'); 
const apellido = document.getElementById('apellido'); 
const alias = document.getElementById('alias'); 
const enviar = document.getElementById('enviar');
const mensaje = document.getElementById('mensaje');
const divMensajes = document.getElementById('mensajes');

loadProducts(divProductos);
loadMessages(divMensajes);
newMessage(divMensajes); 


window.addEventListener('DOMContentLoaded',async ()=>{
    const data = await obtenerProductos(); 
    renderProduct(data); 
})


const obtenerProductos = async() =>{
    const url = 'http://localhost:8080/api/productos'
    const response = await fetch(url);
    const productos = await response.json(); 

    return productos;
}



const createProductItem = productos => productos.map(producto =>{
    return(
        `<div class="cardProducto">
            <div class="card item">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                </div>
                <ul>
                    <li>
                        ${producto.precio}
                    </li>
                </ul>
            </div>
        </div>`
    )
}).join(''); 


const renderProduct = (productos) =>{
    const item = createProductItem(productos); 
    divProductos.innerHTML = item; 
}





enviar.addEventListener('click',() =>{
    const mensajes ={
        email:mail.value,
        mensaje:mensaje.value,
        nombre:nombre.value,
        apellido:apellido.value,
        alias:alias.value
    };
    saveMenssage(mensajes);
});


