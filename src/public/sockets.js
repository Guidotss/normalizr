const socket = io(); 

export const loadProducts = (divProductos) =>{
    socket.on('server:loadProducts', (productos) => {
        productos.forEach(producto =>{
            
            divProductos.innerHTML+= 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                </div>
                <ul>
                    <li>${producto.url}</li>
                    <li>${producto.precio}</li>
                </ul>
            </div>`; 
            
        });
    });
};


export const saveMenssage = (mensaje)=>{
    socket.emit('client:newMessage',mensaje);
};

export const loadMessages = (divMensajes)=>{
    socket.on('server:loadMenssages',(mensajes)=>{
        divMensajes.innerHTML = mensajes.map(mensaje =>{
            return(
                `<div>
                    <strong>${mensaje.author.mail}</strong>
                    <em>${mensaje.text.mensaje}</em>
                </div>`
            )
        }).join('')
    });
};

export const newMessage = (divMensajes) =>{
    socket.on('server:newMessage',nuevoMensaje=>{
        divMensajes.innerHTML+=
        `<strong>${nuevoMensaje.author.mail}</strong>
        <em>${nuevoMensaje.text.mensaje}</em>
        <br>`;
    });
};