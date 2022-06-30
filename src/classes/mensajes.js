import mongoose from 'mongoose'; 
import config from '../dataBase/config'; 
import {normalize,schema} from 'normalizr'; 
import {inspect} from 'util'; 
import { AsyncLocalStorage } from 'async_hooks';

mongoose.connect(config.MongoDB.URL,config.MongoDB.options); 

export class Mensajes{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema); 
    }

    async getAll(){
        const mensajes = await this.collection.find({Mensajes});
        const mensajeOBJ = {}; 
        const mensajeArray = []; 

        mensajes.forEach(mensaje =>{
            mensajeArray.push(mensaje); 
        })
        mensajeOBJ.Mensajes = mensajeArray; 

        const user = new schema.Entity('user'); 
        const text = new schema.Entity('text'); 
        
        const mensaje = new schema.Entity('mensaje',{
            author:user,
            text:text
        });
        const mensajesSchema = new schema.Entity('mensajes',{
            Mensajes:[mensaje]
        }) 

        const normalizedData = new normalize(mensajeOBJ,mensajesSchema); 

        console.log(inspect(normalizedData,true,12,false));        

    }

    async create(mensaje){
        const nuevoMensajes = await this.collection.create({author:{mail:mensaje.email,nombre:mensaje.nombre,apellido:mensaje.apellido,alias:mensaje.alias},text:{mensaje:mensaje.mensaje}});
        return nuevoMensajes; 
    }
}