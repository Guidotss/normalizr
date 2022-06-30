import { faker } from '@faker-js/faker'; 
faker.locale = 'es'; 

export function generarProductos(){
    const productos = [];
    
    for(let i = 0; i < 5; i++){
        const producto = {
            nombre:faker.commerce.product(),
            precio:faker.commerce.price()
        }
        productos.push(producto);
    }
    return productos; 
}