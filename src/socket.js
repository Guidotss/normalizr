import {Mensajes} from './classes/mensajes'; 
import {mensajesSchema} from './models/mensajes'

const apiMensajes = new Mensajes('mensajes',mensajesSchema);

export default (io)=>{
    io.on('connection',(client) =>{
        console.log('new user connected',client.id);

     /*    const emitProductos = async() => {
            const  productos = await apiProductos.getAll(); 
            io.emit('server:loadProducts',productos); 
        }; 
        emitProductos(); */

        const emitMensaje = async()=>{
            const mensajes = await apiMensajes.getAll(); 
            io.emit('server:loadMenssages',mensajes);
        };
        emitMensaje();


        client.on('client:newMessage',async(mensaje)=>{
            const nuevoMensaje = await apiMensajes.create(mensaje);
            io.emit('server:newMessage',nuevoMensaje); 
        });

    }); 
};